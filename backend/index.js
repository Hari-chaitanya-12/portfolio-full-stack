import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
const app = express();

connectDB();

// CORS setup
app.use(
  cors({
    origin: [
      "http://localhost:5173",            // dev (Vite)
      "https://your-frontend.netlify.app" // production frontend
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use("/api/contacts", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Portfolio Backend running on port: ${PORT}`)
);
