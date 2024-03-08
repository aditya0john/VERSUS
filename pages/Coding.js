import CodeEditor from "@/components/CodeEditor";
import Layout2 from "@/components/Layout2";
import Loading from "@/components/Loading";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Coding() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [output, setOutput] = useState(null);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/659d5db3266cfc3fde74ba15")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  console.log("oyeeeee", data);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loading />
      </div>
    );
  } else if (!data) {
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
    <main>
      <Layout2>
        <div className="bg-white p-3">
          <CodeEditor onCompile={handleCompile} />
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
        </div>
      </Layout2>
    </main>
  );
}

export default Coding;
