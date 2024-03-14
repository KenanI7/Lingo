import { Request, Response } from "express";
import { User } from "../models/user";


export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // validaja passworda
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(password)) {
      return res.status(400).json({ message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, and be at least 8 characters long." });
    }

    // validacja emaila
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};


export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users: User[] = [];
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
};
