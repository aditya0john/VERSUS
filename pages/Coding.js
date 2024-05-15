import CodeEditor from "@/components/CodeEditor";
import Layout4 from "@/components/Layout4";
import Loading from "@/components/Loading";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Coding() {
  const [output, setOutput] = useState(null);
  console.log("RESPONSE", response, code, lang);

  const handleCompile = async (code, lang) => {
    try {
      const response = await axios.post("/compile", {
        code,
        lang,
      });

      const { compileOutput } = response?.data;

      console.log("Compilation Output:", compileOutput);
      // console.log("Execution Output:", executionOutput);

      // Update the state with compile and execution output
      setOutput(compileOutput);
    } catch (error) {
      console.error("Compilation Error:", error.message);
      setOutput("-> " + error.message + " <-");
    }
  };

  return (
    <main>
      <Layout4>
        <div className="bg-white p-3">
          <CodeEditor onCompile={handleCompile} />
          <div>
            <h3>Output</h3>
            <div>
              <textarea
                className="border border-black rounded-lg w-full p-2 bg-white change"
                placeholder="//the output is shown here"
                value={output}
              />
            </div>
          </div>
        </div>
      </Layout4>
    </main>
  );
}

export default Coding;
