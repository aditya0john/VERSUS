import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

export default function CodeEditor({ onCompile }) {
  let [lang, setLanguage] = useState("c_cpp");
  let [code, setCode] = useState(
    "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Your C++ code here\n  return 0;\n}"
  );

  const handleCompile = () => {
    onCompile(code, lang);
  };

  return (
    <>
      <div className="bg-gray-200 rounded-lg p-3 grid gap-3">
        <div>
          <div className="flex justify-between mb-3">
            <h3 className="uppercase">Code Editor</h3>
            <span>
              <label className="font-bold shdg">Languge :</label>
              <select
                className="border border-black p-2 rounded ml-1 uppercase"
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value={"c_cpp"}>C & C++</option>
                <option value={"java"}>java</option>
                <option value={"python"}>Python</option>
              </select>
            </span>
          </div>
          <AceEditor
            className="border border-black rounded-lg"
            mode={lang}
            value={code}
            enableLiveAutocompletion={true}
            theme="monokai"
            fontSize="22px"
            onChange={(e) => setCode(e)}
            editorProps={{ $blockScrolling: true }}
            style={{
              width: "100%",
              height: "700px",
            }}
          />
        </div>
      </div>

      <button
        onClick={handleCompile}
        className="flex items-center border border-black box change p-3 rounded-lg mt-3 shdg uppercase"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-6 h-6"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
            clip-rule="evenodd"
          />
        </svg>
        Compile
      </button>
    </>
  );
}
