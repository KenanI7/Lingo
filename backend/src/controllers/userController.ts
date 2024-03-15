import { Request, Response } from "express";
import { Collection, Db } from "mongodb";

export const registerUser = async (req: Request, res: Response, db: Db) => {
    try {
        const { username, email, password } = req.body;

        // Validate email
        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        // Validate password
        if (!isValidPassword(password)) {
            return res.status(400).json({ message: "Invalid password format" });
        }

        // Validate username
        if (!isValidUsername(username)) {
            return res.status(400).json({ message: "Invalid username format" });
        }

        // Insert user data
        const usersCollection: Collection = db.collection("users");
        await usersCollection.insertOne({ username, email, password });

        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getAllUsers = async (req: Request, res: Response, db: Db) => {
    try {
        const usersCollection: Collection = db.collection("users");
        const users = await usersCollection.find().toArray();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const removeUser = async (req: Request, res: Response, db: Db) => {
    try {
        const { username } = req.params;
        const usersCollection: Collection = db.collection("users");
        const result = await usersCollection.deleteOne({ username });

        if (result.deletedCount === 0) {
            res.status(404).json({ message: "User not found" });
        } else {
            res.json({ message: "User removed successfully" });
        }
    } catch (error) {
        console.error("Error removing user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Validation
const isValidUsername = (username: string): boolean => {
    return /^[a-zA-Z\s]+$/.test(username);
};

const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isValidPassword = (password: string): boolean => {
    return /^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(password);
};

