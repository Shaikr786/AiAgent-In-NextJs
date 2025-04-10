import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const openai = createOpenAI({
  baseURL: process.env["OPENAI_API_KEY"] as string,
});

export const runtime = "edge";
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();



  const result = streamText({
    model: openai("gpt-4o"),
    messages,
  });

  console.log(result);

  return result.toDataStreamResponse();
}
