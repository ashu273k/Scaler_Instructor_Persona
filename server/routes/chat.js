import express from "express";
import OpenAI from "openai";
import { systemPrompts } from "../data/personas.js";

const router = express.Router();

router.post("/chat", async (req, res, next) => {
  try {
    const { persona, messages } = req.body;
    const personaKey = typeof persona === "string" ? persona.trim() : "";

    if (!personaKey || !Array.isArray(messages) || messages.length === 0) {
      return res
        .status(400)
        .json({ error: "Persona and messages are required." });
    }

    const systemPrompt = systemPrompts[personaKey];
    if (!systemPrompt) {
      return res.status(400).json({ error: "Unknown persona." });
    }

    const openai = new OpenAI({ 
        apiKey: process.env.GEMINI_API_KEY,
        baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
     });
    const completion = await openai.chat.completions.create({
      model: "gemini-3.1-flash-lite-preview",
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      max_tokens: 1000,
    });

    const reply = completion.choices?.[0]?.message?.content?.trim();
    if (!reply) {
      return res
        .status(502)
        .json({ error: "No reply received from the model." });
    }

    return res.json({ reply });
  } catch (error) {
    if (error?.status === 401) {
      return res.status(401).json({ error: "Invalid API key." });
    }
    if (error?.status === 429) {
      return res.status(429).json({ error: "Rate limit exceeded." });
    }
    if (error?.status >= 400 && error?.status < 500) {
      return res
        .status(error.status)
        .json({ error: "Request could not be processed." });
    }

    return next(error);
  }
});

export default router;
