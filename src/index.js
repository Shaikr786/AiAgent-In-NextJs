// src/index.js
import 'dotenv/config';
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

async function main() {
  try {
    const response = await generateText({
      model: openai('gpt-3.5-turbo'), // Specify the OpenAI model you wish to use
      prompt: 'Write a sonnet about the sea.',
    });

    console.log(response.text);
  } catch (error) {
    console.error('Error generating text:', error);
  }
}

main();
