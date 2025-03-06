// pages/api/chat.js
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export default async function handler(req, res) {
  const { messages } = req.body;
  const result = streamText({
    model: openai("gpt-4o-mini"),
    messages,
  });
  result.pipe(res);
}
