const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend domain
    methods: ["POST"], // Allow only POST requests
    allowedHeaders: ["Content-Type", "Authorization"], // Allow only specific headers
  })
);

app.post("/compile", async (req, res) => {
  try {
    console.log("Received a request to compile");
    const code = req?.body?.code;
    const lang = req?.body?.lang;
    let clientId = process?.env?.CLIENT_ID;
    let clientSecret = process?.env?.CLIENT_SECRET;
    console.log(process.env, clientId, clientSecret);
    console.log("Received Code:", code, "and Lang", lang);

    const response = await axios.post("https://api.jdoodle.com/v1/execute", {
      clientId: "48e4ddaba9c67cd755ccbd1a528a6be2",
      clientSecret:
        "2cd4118b374b243f9f0235f290b05527f20459727bd515ba27d36382e851e341",
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
