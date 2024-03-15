import { MongoClient } from "mongodb";
require("dotenv").config();

const uri = process.env.MONGO_URI;

const dbName = "Lingo";

const client = new MongoClient(uri!);

export const connectToMongoDB = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);

    return db;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
