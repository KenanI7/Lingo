import express from "express";
import userRouter from "./routes/user";
import { userRoutes } from "./routes/user";

import { connectToMongoDB } from "./db";
import { authMiddleware } from "./middleware";
import { authRoutes } from "./routes/auth";

import authRouter from "./routes/auth";

require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

const main = async () => {
  try {
    const db = await connectToMongoDB();

    if (!db) throw new Error("Error connecting to MongoDB");

    authRoutes(db);
    userRoutes(db);

    app.use("/api/auth", authRouter);

    app.use("/api/users", authMiddleware, userRouter);
  } catch (error) {
    console.log(error);
  }
};

main();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
