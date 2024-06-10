import { Redis } from '@upstash/redis'

function getCredentials() {    
  const credentials = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  if (!credentials) {
    throw new Error('Missing credentials for Upstash Redis')
  }
  return 
}

export const kv = new Redis({
  url: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_URL,
  token: process.env.NEXT_PUBLIC_UPSTASH_REDIS_REST_TOKEN
})
