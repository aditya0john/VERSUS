import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Method Not Allowed", statusCode: 405 });
  }

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
