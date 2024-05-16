// pages/api/compile.js

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed', statusCode: 405 });
  }

  const code = req.body.code;
  const lang = req.body.lang;

  try {
    const response = await axios.post('https://api.jdoodle.com/v1/execute', {
      clientId: '48e4ddaba9c67cd755ccbd1a528a6be2',
      clientSecret: 'b835df6092d74879bb33a5086ff347e4de489c3750287c239e0d555b9091fd5e',
      script: code,
      language: lang,
      versionIndex: '0',
    });

    return res.status(200).json({ compileOutput: response.data.output });
  } catch (error) {
    console.error(error);

    return res.status(500).json({ compileOutput: error.message, statusCode: 500 });
  }
}
