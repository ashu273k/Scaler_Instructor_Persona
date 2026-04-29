Build a Node.js + Express backend for a persona-based AI chatbot application.

## Tech Stack
- Node.js with ES Modules (type: "module" in package.json)
- Express.js
- OpenAI Node.js SDK (not axios)
- dotenv for environment variables
- cors for cross-origin requests

## Project Structure to generate
``` text
server/
├── index.js              ← Express app entry point
├── routes/
│   └── chat.js           ← POST /api/chat route
├── data/
│   └── personas.js       ← All 3 system prompts
├── middleware/
│   └── errorHandler.js   ← Global error handler
├── package.json
└── .env.example
```

## API Details
- Use OpenAI SDK: import OpenAI from 'openai'
- Model: gpt-4o
- API key read from process.env.OPENAI_API_KEY
- Base URL is default OpenAI (no custom base URL needed)

## POST /api/chat
Request body:
{
  "persona": "anshuman" | "abhimanyu" | "kshitij",
  "messages": [
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ]
}

Response (success):
{ "reply": "string" }

Response (error):
{ "error": "user-friendly error message" }

## Behavior Requirements
1. Validate that persona and messages exist in request body
2. Look up the correct system prompt from personas.js using the persona key
3. Call OpenAI using the SDK like this:
   const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
   const completion = await openai.chat.completions.create({
     model: 'gpt-4o',
     messages: [
       { role: 'system', content: systemPrompts[persona] },
       ...messages
     ],
     max_tokens: 1000,
   })
   const reply = completion.choices[0].message.content
4. Return { reply } on success
5. Handle OpenAI API errors (rate limit, invalid key, etc.) gracefully
6. Never expose the raw error object to the frontend

## System Prompts (personas.js)
Create placeholder system prompts for 3 personas:
- anshuman: Anshuman Singh, co-founder of Scaler Academy, ex-Uber engineer, IIT grad.
  Speaks with calm authority, grounds advice in real hiring experience.
- abhimanyu: Abhimanyu Saxena, co-founder of Scaler and InterviewBit, IIT Delhi.
  High energy, thinks in frameworks and systems, product-builder mindset.
- kshitij: Kshitij Mishra, educator at Scaler Academy.
  Warm, patient, uses analogies to explain hard CS concepts.

Each system prompt must include:
  - Persona description (background, values, communication style)
  - 3 few-shot Q&A examples embedded in the prompt
  - Chain-of-thought instruction (tell model to reason before answering)
  - Output format instruction (3-5 sentences, end with a question)
  - Constraints (what the persona should NEVER do)

Export as:
export const systemPrompts = { anshuman: `...`, abhimanyu: `...`, kshitij: `...` }

## Error Handler Middleware
- Catch all unhandled errors
- Log error details to console (server side only)
- Return status 500 with { error: "Something went wrong. Please try again." }

## package.json requirements
- "type": "module" for ES module support
- scripts: { "start": "node index.js", "dev": "nodemon index.js" }
- dependencies: express, openai, dotenv, cors
- devDependencies: nodemon

## .env.example
OPENAI_API_KEY=your_openai_api_key_here
PORT=5000

## Additional Requirements
- Use async/await throughout, no callbacks
- Add input sanitization — trim whitespace from persona string
- Add a GET /health route that returns { status: "ok" } for deployment checks
- CORS should allow http://localhost:5173 in development
- Console log the port when server starts

Generate all files with complete working code, no placeholders or TODOs.