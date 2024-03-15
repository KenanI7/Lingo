import express from "express";
import userRoutes from "./routes/user";
import { connectToMongoDB } from "./db";
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 8000;

app.get("/test", (req, res) => {
  res.send("Hello World!");
});

const main = async () => {
  try {
    const db = await connectToMongoDB();

    if (!db) throw new Error("Error connecting to MongoDB");

    userRoutes(app, db);
  } catch (error) {
    console.log(error);
  }
};

main();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
