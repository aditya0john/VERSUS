const express = require("express");
const bodyParser = require("body-parser");
const { spawn } = require("child_process");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/compile", (req, res) => {
  const code = req.body.code;
  const lang = req.body.lang;
  console.log(`Received Code:`, req.body, code);

  let compilerPath;
  let compilerArgs;

  // Spawn a new g++ process for each compilation request
  if (lang === "c_cpp") {
    compilerPath = "C:/Program Files/CodeBlocks/MinGW/bin/g++.exe";
    compilerArgs = ["-o", "compiledCode", "-x", "c++", "-"];
  } else if (lang === "java") {
    compilerPath = "";
    compilerArgs = [];
  } else if (lang === "python") {
    compilerPath = "";
    compilerArgs = [];
  } else {
    res.send("invalid language");
    return;
  }

  const compileProcess = spawn(compilerPath, compilerArgs);

  console.log("Compilation Command:", "g++", [
    "-o",
    "compiledCode",
    "-x",
    lang,
    "-",
  ]);

  let stdoutData = "";
  let stderrData = "";

  console.log("Compilation process starting at:", new Date().toISOString());

  // Handle stdout data
  compileProcess.stdout.on("data", (data) => {
    stdoutData += data.toString();
    console.log("stdout:", data.toString());
  });

  // Handle stderr data
  compileProcess.stderr.on("data", (data) => {
    stderrData += data.toString();
    console.error("stderr:", data.toString());
  });

  // Handle process exit
  compileProcess.on("close", (code) => {
    console.log("Compilation process completed at:", new Date().toISOString());
    if (code === 0) {
      // Execute the compiledCode
      const executionProcess = spawn("./compiledCode", []);

      let executionOutput = "";

      // Handle execution stdout data
      executionProcess.stdout.on("data", (data) => {
        executionOutput += data.toString();
        console.log("Execution stdout:", data.toString());
      });

      // Handle execution stderr data
      executionProcess.stderr.on("data", (data) => {
        console.error("Execution stderr:", data.toString());
      });

      // Handle execution process exit
      executionProcess.on("close", (executionCode) => {
        console.log("Execution process completed with code:", executionCode);
        res.send({ compileOutput: stdoutData, executionOutput });
      });
    } else {
      res.status(500).send({ compileOutput: stderrData });
    }
  });

  // Write the code to the stdin of the compilation process
  compileProcess.stdin.write(code);
  compileProcess.stdin.end();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
