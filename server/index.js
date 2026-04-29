import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRouter from "./routes/chat.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
	cors({
		origin: ["http://localhost:5173", "https://scaler-instructor-persona.vercel.app"],
	})
);

app.get("/health", (req, res) => {
	res.json({ status: "ok" });
});

app.use("/api", chatRouter);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});