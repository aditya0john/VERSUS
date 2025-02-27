const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://e-learning-website-major-project.vercel.app/Coding", // Replace with your frontend domain
    methods: ["POST"], // Allow only POST requestsF
    allowedHeaders: ["Content-Type", "Authorization"], // Allow only specific headers
  })
);

app.post("/compile", async (req, res) => {
  console.log("Received a request to compile");
  const code = req?.body?.code;
  const lang = req?.body?.lang;
  let clientId = process?.env?.CLIENT_ID;
  let clientSecret = process?.env?.CLIENT_SECRET;
  console.log(process.env, clientId, clientSecret);
  console.log("Received Code:", code, "and Lang", lang);
  try {
    const response = await axios.post("https://api.jdoodle.com/v1/execute", {
      clientId: "48e4ddaba9c67cd755ccbd1a528a6be2",
      clientSecret:
        "b835df6092d74879bb33a5086ff347e4de489c3750287c239e0d555b9091fd5e",
      script: req?.body?.code,
      language: req?.body?.lang,
      versionIndex: "0",
    });
    res.send({
      compileOutput: response.data.output,
    });
    console.log(response.data.output);
  } catch (error) {
    let status;
    let message;
    if (error?.response) {
      status = error.response.status;
      message = error.response.data.status;
    } else if (error.request) {
      status = 500;
      message = "NO RESPONSE FROM SERVER";
    } else {
      status = 500;
      message = error.message;
    }
    console.error(error, status);
    res
      .status(status)
      .send({ compileOutput: error.message, statusCode: status });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
