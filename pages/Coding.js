import CodeEditor from "@/components/CodeEditor";
import Layout4 from "@/components/Layout4";
import axios from "axios";
import React, { useState } from "react";

function Coding() {
  const [output, setOutput] = useState(null);
  const [statusCode, setStatus] = useState(null);
  const [limit, setLimit] = useState(null);
  const [err, setErr] = useState(null);

  const handleCompile = async (code, lang) => {
    console.log("CODING", code, lang);

    try {
      const response = await axios.post("/api/compile", {
        code,
        lang,
      });

      const { compileOutput } = response?.data;
      console.log("Compilation Output:", compileOutput);
      setOutput(compileOutput);
    } catch (error) {
      setStatus(error?.response?.status);
      setLimit(error?.response?.data.limit);
      console.error("Compilation Error:", error.message);
      setOutput("-> " + error.message + " <-");
      setErr(error.message);
      if (statusCode == 429) {
        console.log(error.response.data.limit);
        setErr(limit);
        setOutput(limit);
      }
    }
  };

  return (
    <main>
      <Layout4>
        <div className="bg-white p-3">
          <CodeEditor onCompile={handleCompile} err={err} status={statusCode} />
          <div>
            <h3>Output</h3>
            <div className="relative">
              <textarea
                id="txt"
                className="border border-black rounded-lg w-full h-40 resize-none overflow-hidden p-2 bg-black text-white"
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
