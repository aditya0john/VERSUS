const express = require("express");
// const bodyParser = require("body-parser");
// const { spawn } = require("child_process");
const cors = require("cors");
// const readline = require("readline");
const { default: axios } = require("axios");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/compile", async (req, res) => {
  // let compilerPath;
  // let compilerArgs;

  try {
    console.log("received a request to compile");
    const code = req.body.code;
    const lang = req.body.lang;
    console.log("Received Code:", code, lang);
    const response = await axios.post("https://api.jdoodle.com/v1/execute", {
      clientId: process.env.JDOODLE_ID,
      clientSecret: process.env.JDOODLE_SECRET,
      script: code,
      language: lang,
      versionIndex: "0",
    });

    res.send({ compileOutput: response?.data?.output });
    console.log(response?.data?.output);
  } catch (error) {
    console.error("Compilation error:", error);
    res.status(500).send({ compileOutput: "Compilation error" });
  }
  // const inputDemandRegex =
  //   /(cin\s*>>\s*)(\w+)|\b(Scanner)\s+(\w+)\s*=\s*new\s+Scanner\(System\.in\)\s*;/g;
  // const inputDemands = [];
  // let match;
  // while ((match = inputDemandRegex.exec(code)) !== null) {
  //   // match[2] contains the variable name for cin >> statements
  //   // match[4] contains the variable name for Scanner statements
  //   if (match[2]) {
  //     inputDemands.push({ type: "cin", variable: match[2] });
  //   } else if (match[4]) {
  //     inputDemands.push({ type: "Scanner", variable: match[4] });
  //   }
  // }

  // console.log("Input Demands:", inputDemands);

  // // Send response with input demands
  // res.send({ inputDemands });

  // // Take inputs from user
  // const userInput = {};
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout,
  // });

  // try {
  //   // Your server code here
  //   const promptUserInput = (inputDemandIndex) => {
  //     if (inputDemandIndex >= inputDemands.length) {
  //       rl.close();
  //       console.log("User Input:", userInput);
  //       res.send({ userInput });
  //       return;
  //     }

  //     const inputDemand = inputDemands[inputDemandIndex];
  //     rl.question(
  //       `Enter a value for ${inputDemand.variable}: `,
  //       (userInputValue) => {
  //         userInput[inputDemand.variable] = userInputValue;
  //         promptUserInput(inputDemandIndex + 1);
  //       }
  //     );
  //   };

  //   promptUserInput(0);
  // } catch (error) {
  //   console.error("An error occurred:", error);
  // }

  // Spawn a new g++ process for each compilation request
  // if (lang === "c_cpp") {
  //   compilerPath = "C:/Program Files/CodeBlocks/MinGW/bin/g++.exe";
  //   compilerArgs = ["-o", "compiledCode", "-x", "c++", "-"];
  // } else if (lang === "java") {
  //   compilerPath = "";
  //   compilerArgs = [];
  // } else if (lang === "python") {
  //   compilerPath = "";
  //   compilerArgs = [];
  // } else {
  //   res.send("invalid language");
  //   return;
  // }

  // const compileProcess = spawn(compilerPath, compilerArgs);

  // console.log("Compilation Command:", "g++", [
  //   "-o",
  //   "compiledCode",
  //   "-x",
  //   lang,
  //   "-",
  // ]);

  // let stdoutData = "";
  // let stderrData = "";

  // console.log("Compilation process starting at:", new Date().toISOString());

  // // Handle stdout data
  // compileProcess.stdout.on("data", (data) => {
  //   stdoutData += data.toString();
  //   console.log("stdout:", data.toString());
  // });

  // // Handle stderr data
  // compileProcess.stderr.on("data", (data) => {
  //   stderrData += data.toString();
  //   console.error("stderr:", data.toString());
  // });

  // // Handle process exit
  // compileProcess.on("close", (code) => {
  //   console.log("Compilation process completed at:", new Date().toISOString());
  //   if (code === 0) {
  //     // Execute the compiledCode
  //     const executionProcess = spawn("./compiledCode", []);

  //     let executionOutput = "";

  //     // Handle execution stdout data
  //     executionProcess.stdout.on("data", (data) => {
  //       executionOutput += data.toString();
  //       console.log("Execution stdout:", data.toString());
  //     });

  //     // Handle execution stderr data
  //     executionProcess.stderr.on("data", (data) => {
  //       console.error("Execution stderr:", data.toString());
  //     });

  //     // Handle execution process exit
  //     executionProcess.on("close", (executionCode) => {
  //       console.log("Execution process completed with code:", executionCode);
  //       res.send({ compileOutput: stdoutData, executionOutput });
  //     });
  //   } else {
  //     res.status(500).send({ compileOutput: stderrData });
  //   }
  // });

  // // Write the code to the stdin of the compilation process
  // compileProcess.stdin.write(code);
  // compileProcess.stdin.end();
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
