import CodeEditor from "@/components/CodeEditor";
import Layout4 from "@/components/Layout4";
// import Loading from "@/components/Loading";
import axios from "axios";
import React, { useState } from "react";

function Coding() {
  const [output, setOutput] = useState(null);
  const [statusCode, setStatus] = useState(null);
  const [err, setErr] = useState("");
  const handleCompile = async (code, lang) => {
    console.log("CODING", code, lang);
    try {
      const response = await axios.post("http://localhost:3001/compile", {
        code,
        lang,
      });

      const { compileOutput } = response?.data;
      console.log("Compilation Output:", compileOutput, response?.data);
      setOutput(compileOutput);
    } catch (error) {
      setStatus(error.response.status);
      console.error("Compilation Error:", error.message);
      setOutput("-> " + error.message + " <-");
      setErr(error.message);
    }
  };

  return (
    <main>
      <Layout4>
        <div className="bg-white p-3">
          <CodeEditor onCompile={handleCompile} err={err} status={statusCode} />
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
