import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import classRoutes from "./routes/classRoutes.js";

const port = 5000;
const app = express();

dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/api/user", userRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/class", classRoutes);

app.use(
  "/public/photos",
  express.static(path.join(import.meta.dirname, "public/photos"))
);

app.use(express.static(path.join(import.meta.dirname, "../frontend/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(import.meta.dirname, "../frontend/dist/index.html"));
});

app.listen(port, () => {
  connectDb();
  console.log(`Aplikasi berjalan di http://localhost:${port}`);
});
