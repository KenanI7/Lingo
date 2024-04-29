import { Request, Response } from "express";
import { Collection, Db } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require("dotenv").config();

export const registerUser = async (req: Request, res: Response, db: Db) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const usersCollection: Collection = db.collection("users");

    await usersCollection.insertOne({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error);

    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req: Request, res: Response, db: Db) => {
  try {
    const { username, password } = req.body;

    const usersCollection: Collection = db.collection("users");

    const user = await usersCollection.findOne({ username });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const secretKey = process.env.JWT_SECRET;

    if (!secretKey) {
      throw new Error("Secret key not found");
    }

    const token = jwt.sign({ username }, secretKey);

    res.json({ status: "success", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
