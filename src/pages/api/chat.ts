// pages/api/chat.ts

import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o-mini";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = process.env["NEXT_PUBLIC_GITHUB_TOKEN"];

  if (!token) {
    return res.status(400).json({ message: "GitHub token is missing." });
  }

  try {
    const client = new OpenAI({ baseURL: endpoint, apiKey: token });

    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: req.body.message },
      ],
      temperature: 1.0,
      top_p: 1.0,
      max_tokens: 1000,
      model: modelName,
    });

    const messageContent = response.choices[0].message.content ?? "No response available";

    return res.status(200).json({ message: messageContent });
  } catch (err) {
    console.error("Error fetching data:", err);
    return res.status(500).json({ message: "An error occurred while fetching the response." });
  }
}