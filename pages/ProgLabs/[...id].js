import CodeEditor from "@/components/CodeEditor";
import Layout4 from "@/components/Layout4";
import Loading from "@/components/Loading";
import Timer from "@/components/Timer";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProgLabs() {
  const inactive =
    "bg-white change text-black justify-center flex box border border-black p-3 text-decoration-none round";
  const active =
    "change bg-black text-white justify-center flex box border border-black p-3 text-decoration-none round";

  const [isLoading, setLoading] = useState(true);
  const [ques, setQuestion] = useState(null);
  const [output, setOutput] = useState(null);
  let [answer, setAnswer] = useState(null);
  let [press, setPress] = useState(false);
  let [Course, setCourse] = useState([]);
  const [statusCode, setStatus] = useState(null);
  const [err, setErr] = useState(null);
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

      const { compileOutput } = response?.data;

      console.log("Compilation Output:", compileOutput);

      // Update the state with compile and execution output
      setOutput(compileOutput);
    } catch (error) {
      setStatus(error?.response?.status);
      console.error("Compilation Error:", error.message);
      setOutput("-> " + error.message + " <-");
      setErr(error.message);
    }
  };

  function check(option, answer) {
    const submit = document.getElementById("submit");
    const feedbackDiv = document.getElementById("feedback");
    if (option === answer && option != null && answer != null) {
      submit.style.opacity = 0;
      feedbackDiv.innerText = "✔️";
      feedbackDiv.style.backgroundColor = "lightgreen";
      feedbackDiv.classList.add("show-feedback");
      setTimeout(() => {
        submit.style.opacity = 100;
        feedbackDiv.classList.remove("show-feedback");
      }, 2000);
    } else if (option != answer && option != null && answer != null) {
      feedbackDiv.innerText = "❌";
      submit.style.opacity = 0;
      feedbackDiv.style.backgroundColor = "yellow";
      feedbackDiv.classList.add("show-feedback");
      setTimeout(() => {
        submit.style.opacity = 100;
        feedbackDiv.classList.remove("show-feedback");
      }, 1000);
    }
  }

  return (
    <main className="user-select-none">
      <Layout4>
        <div className="h-full seashell rounded-lg p-1 gride">
          <aside className="bg-purple-100 border border-black border-3 rounded-lg m-1 w-30">
            <div>
              <p className="flex justify-between p-3 pb-0 mb-0 shdg font-bold">
                Questions
                <Timer press={press} />
              </p>
              <hr />
              <div className="rounded-lg m-2 grid grid-cols-4">
                {Course.filter((x) => x._id == courseId).map((product) =>
                  product.tests
                    .filter((x) => x._id == testId)
                    .map((test) =>
                      test.questions.map((question, j) => (
                        <div key={j}>
                          <span key={j} className="">
                            <button
                              onClick={() => {
                                setQuestion(question?._id);
                                setPress(true);
                              }}
                              className={
                                ques == question._id ? active : inactive
                              }
                            >
                              {j + 1}
                            </button>
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
              <div className="rounded-lg m-2 flex grid grid-cols-4">
                {Course.filter((x) => x._id == courseId).map((product) =>
                  product.tests
                    .filter((x) => x._id == testId)
                    .map((test) =>
                      test.problems.map((problem, j) => (
                        <span key={j} className="flex">
                          <button
                            onClick={() => {
                              setQuestion(problem?._id);
                              setPress(true);
                            }}
                            className={ques == problem._id ? active : inactive}
                          >
                            {j + 1}
                          </button>
                        </span>
                      ))
                    )
                )}
              </div>
            </div>
          </aside>

          <div className="border border-black border-3 rounded-lg m-1">
            <div>
              {Course.filter((x) => x._id == courseId).map((product) =>
                product.tests
                  .filter((x) => x._id == testId)
                  .map((test) =>
                    test.questions
                      .filter((x) => x._id == ques)
                      .map((question, j) => (
                        <div
                          key={j}
                          id="data"
                          className="bg-orange-100 p-3 rounded-lg"
                        >
                          <pre>
                            <p className="shdg font-bold uppercase">
                              Q. {question.question}
                            </p>
                          </pre>
                          <div>
                            {question.options.map((option) => {
                              return (
                                <>
                                  <div class="custom-radio">
                                    <input
                                      type="radio"
                                      id="radio-1"
                                      name="tabs"
                                      value={"a"}
                                    />
                                    <label class="radio-label" for="radio-1">
                                      <div class="radio-circle"></div>
                                      <span class="radio-text">{option.a}</span>
                                    </label>
                                    <input
                                      type="radio"
                                      id="radio-2"
                                      name="tabs"
                                      value={"b"}
                                    />
                                    <label class="radio-label" for="radio-2">
                                      <div class="radio-circle"></div>
                                      <span class="radio-text">{option.b}</span>
                                    </label>
                                    <input
                                      type="radio"
                                      id="radio-3"
                                      name="tabs"
                                      value={"c"}
                                    />
                                    <label class="radio-label" for="radio-3">
                                      <div class="radio-circle"></div>
                                      <span class="radio-text">{option.c}</span>
                                    </label>
                                  </div>
                                  <div className="flex justify-center items-center gap-3 p-4">
                                    <button
                                      onClick={() =>
                                        check(
                                          document.querySelector(
                                            'input[name="tabs"]:checked'
                                          )?.value,
                                          question?.answer
                                        )
                                      }
                                      id="submit"
                                      className="bg-orange-200 change p-3 bradius flex items-center gap-2"
                                    >
                                      <i className="phdg">SUBMIT</i>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-8 h-8"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                        />
                                      </svg>
                                    </button>
                                    <div className="absolute z-1 flex items-center justify-center">
                                      <div
                                        id="feedback"
                                        className="feedback"
                                      ></div>
                                    </div>
                                  </div>
                                </>
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
                          <div id="root" className="p-3">
                            <i className="phdg uppercase">
                              Q. {problem.problem}.{console.log(problem)}
                            </i>
                            <hr />
                            <div className="bg-white rounded-lg ">
                              <div>
                                <CodeEditor
                                  onCompile={handleCompile}
                                  err={err}
                                  status={statusCode}
                                />
                              </div>

                              <div className="bg-orange-100 p-3 mt-3 rounded-lg">
                                <div>
                                  <h3>Output</h3>
                                  <div>
                                    <textarea
                                      disabled="disabled"
                                      className="bg-white change border border-black rounded-lg w-full p-2 placeholder:uppercase change"
                                      placeholder="the output is shown here"
                                      value={output}
                                    />
                                  </div>
                                </div>
                                <hr />
                                <div>
                                  <h3 className="mt-4">Standard Input</h3>
                                  <textarea
                                    className="bg-white border border-black rounded p-2 w-full placeholder:uppercase change"
                                    placeholder="**enter the pre-defined input here**"
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
      </Layout4>
    </main>
  );
}
