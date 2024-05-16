import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";
import { useRouter } from "next/router";

export default function CodeEditor({ onCompile, err, status }) {
  let route = useRouter();
  let [lang, setLanguage] = useState("cpp17");
  let color;
  const [showModal, setShowModal] = useState(false);
  let [code, setCode] = useState(
    "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Your C++ code here\n  return 0;\n}"
  );

  function ConfirmationModal({ message, onConfirm, onCancel }) {
    return (
      <div
        className={`p-3 bg-${color}-100 rounded-lg flex items-center justify-center`}
      >
        <div className="modal-content">
          <p className=" flex items-center justify-center">{message}</p>
          <div className="flex items-center justify-center gap-10">
            <button
              className={`bg-${color}-200 p-2 change rounded-lg`}
              onClick={onConfirm}
            >
              YES
            </button>
            <button
              className={`bg-${color}-200 p-2 change rounded-lg`}
              onClick={onCancel}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    );
  }

  function resetCode() {
    setCode(
      "#include <iostream>\nusing namespace std;\n\nint main() {\n  // Your C++ code here\n  return 0;\n}"
    );
    setShowModal(false);
  }

  function handleCancel() {
    setShowModal(false);
  }

  if (route.asPath.includes("/Coding")) {
    color = "purple";
  } else if (route.asPath.includes("/ProgLabs")) {
    color = "orange";
  } else {
    color = "gray";
  }

  const handleCompile = () => {
    onCompile(code, lang);
    console.log(code, lang);
  };

  return (
    <>
      <div className={`bg-${color}-100 rounded-lg p-3 grid gap-3`}>
        <div>
          <div className="flex justify-between mb-3">
            <h3 className="uppercase">Code Editor</h3>
            <span className="flex gap-2">
              <button
                className={`bg-${color}-200 p-2 rounded-lg change uppercase font-bold`}
                onClick={() => setShowModal(true)}
              >
                Reset Code
              </button>
              <span>
                <label className="font-bold shdg">Languge :</label>
                <select
                  className="border border-black p-2 rounded ml-1 uppercase bg-black text-white"
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value={"cpp17"}>C & C++</option>
                  <option value={"java"}>java</option>
                  <option value={"python"}>Python</option>
                </select>
              </span>
            </span>
          </div>
          <div className="relative">
            <AceEditor
              className="border border-black rounded-lg"
              mode={lang.includes("cpp17") ? "c_cpp" : lang}
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
            {showModal && (
              <div className="absolute inset-0 flex items-center justify-center">
                <ConfirmationModal
                  message="Do you want to reset the code?"
                  onConfirm={resetCode}
                  onCancel={handleCancel}
                />
              </div>
            )}
          </div>
          <p className="flex gap-2 justify-end p-2 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
            Error : <i className="text-red-600">{err}</i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            Status Code : <i className="text-blue-600">{status}</i>
          </p>
        </div>
        <button
          onClick={handleCompile}
          className={`bg-${color}-200 flex gap-2 items-center box change p-3 rounded-lg mt-3 shdg uppercase`}
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
      </div>
    </>
  );
}
