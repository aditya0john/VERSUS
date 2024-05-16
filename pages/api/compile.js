import axios from "axios";

export default async function handler(req, res) {
  console.log(res.body);
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method Not Allowed", statusCode: 405 });
  }

  try {
    const response = await axios.post("https://api.jdoodle.com/v1/execute", {
      clientId: "48e4ddaba9c67cd755ccbd1a528a6be2",
      clientSecret:
        "2c2962e62ce9df38a62eba8326feb45579af66f97be486ebcfd98dd17444e7dd",
      script: req?.body?.code,
      language: req?.body?.lang,
      versionIndex: req?.body?.version,
    });
    res.send({
      compileOutput: response.data.output,
    });
    console.log("IN COMPILE.JS", response.data.output);
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
}
