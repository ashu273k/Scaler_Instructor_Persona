# Scaler Instructor Persona

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)](https://expressjs.com/)

A three-persona AI chat experience inspired by Scaler instructors. The app pairs a Vite + React frontend with a Node.js + Express backend that routes persona-specific prompts to an LLM.

## Highlights
- Three distinct personas with tailored prompts and greetings
- Real-time chat UI with markdown rendering for rich responses
- Clean separation of frontend (Vercel) and backend (Render)
- Simple health check and robust error handling

## Project Structure
```
Scaler_Instructor_Persona/
	client/   # React + Vite frontend
	server/   # Express backend
```

## Quick Start (Local)

### 1) Backend
```bash
cd server
cp .env.example .env
npm install
npm run dev
```

### 2) Frontend
```bash
cd client
cp .env.example .env
npm install
npm run dev
```

Visit `http://localhost:5173`.

## Environment Variables

### server/.env
```
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

### client/.env
```
VITE_API_BASE_URL=http://localhost:5000
```

## API

### GET /health
```json
{ "status": "ok" }
```

### POST /api/chat
Request body:
```json
{
	"persona": "anshuman" | "abhimanyu" | "kshitij",
	"messages": [
		{ "role": "user", "content": "..." },
		{ "role": "assistant", "content": "..." }
	]
}
```

Response:
```json
{ "reply": "string" }
```

## Deployment

### Backend on Render
1. Create a new Web Service pointing to `server/`.
2. Build command: `npm install`
3. Start command: `npm start`
4. Set env vars: `GEMINI_API_KEY`

### Frontend on Vercel
1. Import the repo and set Root Directory to `client/`.
2. Set env var: `VITE_API_BASE_URL=https://your-render-service.onrender.com`
3. Build command: `npm run build`
4. Output directory: `dist`

## Scripts

### client
- `npm run dev` - Start Vite dev server
- `npm run build` - Production build
- `npm run preview` - Preview production build

### server
- `npm run dev` - Start server with nodemon
- `npm start` - Start server

## Notes
- If you see `EADDRINUSE`, another process is already using port 5000. Stop it or change `PORT`.
- For production, use `npm start` on Render.

## License
MIT
