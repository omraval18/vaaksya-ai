import { createOpenAI } from '@ai-sdk/openai'

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.NEXT_PUBLIC_GROQ_API
})
export const model = groq('llama3-8b-8192')