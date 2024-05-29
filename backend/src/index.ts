import express from "express";
import userRouter from "./routes/user";
import langRouter from "./routes/lang";
import { userRoutes } from "./routes/user";

import { connectToMongoDB } from "./db";
import { authMiddleware } from "./middleware";
import { authRoutes } from "./routes/auth";

import cors from "cors";
import authRouter from "./routes/auth";
import { langRoutes } from "./routes/lang";

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

const PORT = process.env.PORT || 8000;

const main = async () => {
  try {
    const db = await connectToMongoDB();

    if (!db) throw new Error("Error connecting to MongoDB");

    authRoutes(db);
    userRoutes(db);
    langRoutes(db);

    app.use("/api/auth", authRouter);
    app.use("/api/users", authMiddleware, userRouter);
    app.use("/api/lang", authMiddleware, langRouter);
  } catch (error) {
    console.log(error);
  }
};

main();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
