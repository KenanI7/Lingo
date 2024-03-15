import express, { Application } from 'express';
import { registerUser, getAllUsers, removeUser } from '../controllers/userController';
import { Db } from 'mongodb';

const router = express.Router();

export default function userRoutes(app: Application, db: Db) {
    router.post("/register", (req, res) => registerUser(req, res, db));
    router.get("/users", (req, res) => getAllUsers(req, res, db));
    router.delete("/users/:username", (req, res) => removeUser(req, res, db));

    app.use("/api", router);
}
