import CodeEditor from "@/components/CodeEditor";
import Layout2 from "@/components/Layout2";
import Loading from "@/components/Loading";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProgLabs() {
  const inactive =
    "change text-black justify-center flex box border border-black p-3 text-decoration-none round";
  const active =
    "change bg-black text-white justify-center flex box border border-black p-3 text-decoration-none round";

  const [isLoading, setLoading] = useState(true);
  const [ques, setQuestion] = useState(null);
  const [output, setOutput] = useState(null);
  let [Course, setCourse] = useState([]);
  let router = useRouter();

  let testId, courseId;
  // Ensure router.query.id is defined and is an array with at least one element
  if (Array.isArray(router.query.id) && router.query.id.length > 0) {
    // Access the first element of the array
    const queryString = router.query.id[0];

    // Split the query string by '&' to separate key-value pairs
    const queryParams = queryString.split("&");

    // Loop through each key-value pair
    for (const param of queryParams) {
      // Split the key-value pair by '=' to separate key and value
      const [key, value] = param.split("=");

      // Check if the key is 'chapterId'
      if (key === "testId") {
        testId = value;
      }

      // Check if the key is 'courseId'
      if (key === "courseId") {
        courseId = value;
      }
    }

    console.log("Test ID:", testId);
    console.log("Course ID:", courseId);
  } else {
    console.error("router.query.id is not an array with at least one element");
  }

  useEffect(() => {
    axios.get("/api/courses").then((response) => {
      setCourse(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  } else if (!Course) {
    return <p>No profile data</p>;
  }

  const handleCompile = async (code, lang) => {
    try {
      const response = await axios.post("http://localhost:3001/compile", {
        code,
        lang,
      });

      const { compileOutput, executionOutput } = response.data;

      console.log("Compilation Output:", compileOutput);
      console.log("Execution Output:", executionOutput);

      // Update the state with compile and execution output
      setOutput(executionOutput);
    } catch (error) {
      console.error("Compilation Error:", error.message);
      setOutput("-> " + error.message + " <-");
    }
  };

  return (
    <main className="user-select-none">
      <Layout2>
        <div className="h-full bg-white rounded-lg p-1 gride">
          <aside className="border border-black  border-3 rounded-lg m-1">
            <div>
              <p className="p-3 pb-0 mb-0 shdg font-bold">Questions</p>
              <hr />
              <div className="bg-white rounded-lg m-2 flex gridd-cards">
                {Course.filter((x) => x._id == courseId).map((product) =>
                  product.tests
                    .filter((x) => x._id == testId)
                    .map((test) =>
                      test.questions.map((question, j) => (
                        <div key={j}>
                          <span key={j} className="round">
                            <Link
                              onClick={() => setQuestion(question._id)}
                              href={`/ProgLabs/testId=${test?._id}&courseId=${courseId}`}
                              className={
                                ques == question._id ? active : inactive
                              }
                            >
                              {j + 1}
                              {console.log("NUMBER", ques)}
                            </Link>
                          </span>
                        </div>
                      ))
                    )
                )}
              </div>
            </div>
            <div>
              <p className="p-3 pb-0 mb-0 shdg font-bold">Problems</p>
              <hr />
              <div className="bg-white rounded-lg m-2 flex gridd-cards">
                {Course.filter((x) => x._id == courseId).map((product) =>
                  product.tests
                    .filter((x) => x._id == testId)
                    .map((test) =>
                      test.problems.map((problem, j) => (
                        <span key={j} className="round">
                          <Link
                            onClick={() => setQuestion(problem._id)}
                            href={`/ProgLabs/testId=${test?._id}&courseId=${courseId}`}
                            className={ques == problem._id ? active : inactive}
                          >
                            {j + 1}
                          </Link>
                        </span>
                      ))
                    )
                )}
              </div>
            </div>
          </aside>

          <div className="border border-black border-3 rounded-lg m-1">
            <div className="p-3">
              {Course.filter((x) => x._id == courseId).map((product) =>
                product.tests
                  .filter((x) => x._id == testId)
                  .map((test) =>
                    test.questions
                      .filter((x) => x._id == ques)
                      .map((question, j) => (
                        <div key={j}>
                          <i className="phdg uppercase">
                            Q. {question.question}.{console.log(question)}
                          </i>
                          <div>
                            {question.options.map((option) => {
                              return (
                                <div>
                                  <input type="radio" className="options" />
                                  a;
                                  <input type="radio" className="options" />
                                  b;
                                  <input type="radio" className="options" />
                                  c;
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))
                  )
              )}
              {Course.filter((x) => x._id == courseId).map((product) =>
                product.tests
                  .filter((x) => x._id == testId)
                  .map((test) =>
                    test.problems
                      .filter((x) => x._id == ques)
                      .map((problem, j) => (
                        <div key={j}>
                          <div id="root">
                            <i className="phdg uppercase">
                              Q. {problem.problem}.
                            </i>
                            <hr />
                            <div className="bg-white rounded-lg">
                              <div>
                                <CodeEditor onCompile={handleCompile} />
                              </div>

                              <div className="bg-gray-200 p-3 mt-3 rounded-lg">
                                <div>
                                  <h3>Output</h3>
                                  <div>
                                    <textarea
                                      className="border border-black rounded-lg w-full p-2 hover:bg-black hover:text-white hover:placeholder-white"
                                      placeholder="//the output is shown here"
                                      value={output}
                                    />
                                  </div>
                                </div>
                                <hr />
                                <div>
                                  <h3 className="mt-4">Standard Input</h3>
                                  <textarea
                                    className="border border-black rounded p-2 w-full hover:bg-black hover:placeholder-white hover:text-white"
                                    placeholder="*enter the pre-defined input*"
                                    id="input"
                                    name="input"
                                  />
                                  <hr />
                                  <label className="font-bold uppercase ml-1 mr-3">
                                    compile with input :
                                  </label>
                                  <input
                                    type="radio"
                                    name="inputRadio"
                                    id="inputRadio"
                                  />
                                  YES
                                  <input
                                    className="ml-1"
                                    type="radio"
                                    name="inputRadio"
                                    id="inputRadio"
                                    checked
                                  />
                                  NO
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                  )
              )}
            </div>
          </div>
        </div>
      </Layout2>
    </main>
  );
}
