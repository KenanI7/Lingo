import { Request, Response } from "express";
import { Collection } from "mongodb";

export const registerUser = async (req: Request, res: Response, db: any) => {
    try {
        const { username, email, password } = req.body;

        // Insert user data into MongoDB
        const usersCollection: Collection = db.collection("users");
        await usersCollection.insertOne({ username, email, password });

        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getAllUsers = async (req: Request, res: Response, db: any) => {
    try {
        const usersCollection: Collection = db.collection("users");
        const users = await usersCollection.find().toArray();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server error" });
    }
};
