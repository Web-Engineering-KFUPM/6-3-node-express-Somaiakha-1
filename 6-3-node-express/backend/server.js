import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";

const app = express();
const PORT = 3000;

// TODO 4: Enable CORS
app.use(cors());

// TODO 5: Morgan Logger
app.use(morgan("dev"));

// TODO 6.1: Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

// TODO 6.2: Quote API Route
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

// TODO 7: Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});