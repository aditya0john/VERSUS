import CodeEditor from "@/components/CodeEditor";
import Layout4 from "@/components/Layout4";
// import Loading from "@/components/Loading";
import axios from "axios";
import React, { useState } from "react";

function Coding() {
  const [output, setOutput] = useState(null);
  const [err, setErr] = useState("");
  const handleCompile = async (code, lang) => {
    console.log("CODING", code, lang);
    try {
      const response = await axios.post("/compile", {
        code,
        lang,
      });

      const { output } = response?.data;

      console.log("Compilation Output:", output);

      // Update the state with the compilation output
      setOutput(output);
    } catch (error) {
      console.error("Compilation Error:", error.message);
      setOutput("-> " + error.message + " <-");
      setErr(error.message);
    }
  };

  return (
    <main>
      <Layout4>
        <div className="bg-white p-3">
          <CodeEditor onCompile={handleCompile} err={err} />
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
