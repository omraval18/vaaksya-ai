

# Vaaksya AI

This project serves as a template for creating an AI-powered chatbot application utilizing Next.js and the Vercel AI SDK. It includes features such as user authentication, chat history persistence, and a streamlined user interface.

## Technology Stack

- **Next.js**: A robust React framework for building server-side rendered and statically generated web applications.
- **Vercel AI SDK**: Facilitates integration with OpenAI's advanced language models.
- **NextAuth.js**: Manages user authentication and session handling.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Upstash Redis**: Provides storage solutions for chat history.
- **Groq**: Enables direct interaction with OpenAI's models through the Groq API.

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/omraval18/vaaksya-ai.git
cd vaaksya-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```plaintext
# Essential for accessing the OpenAI model
GROQ_API=your_groq_api_key

# Essential for user authentication
AUTH_SECRET=your_secret_key

# Optional: Connection details for Upstash Redis
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### 4. Obtain API Keys

- **Groq API Key**: Register at [Groq](https://groq.com/) to receive an API key necessary for accessing OpenAI's models.
- **Upstash URL and Token**: Register at [Upstash](https://upstash.com/) and Make new Redis Storage and Obtain REST URL and REST TOKEN.
- **Obtain AUTH Secret**: To generate a secret key using OpenSSL in the terminal, you can use the following command:

    ```bash
    openssl rand -base64 32
    ```


### 5. Run the Development Server

```bash
npm run dev
```

This command starts a development server at `http://localhost:3000`, where you can interact with the chatbot.

## Getting Started

Navigate to `http://localhost:3000` to access the chatbot.

- **Login/Signup**: You will be prompted to log in or sign up using the configured credentials provider.
- **Chat**: Post-login, you can begin conversing with the AI.
- **New Chats**: Initiate new chats by clicking the "New Chat" button.



