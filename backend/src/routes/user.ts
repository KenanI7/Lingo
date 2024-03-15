import express, { Application } from "express";
import { registerUser, getAllUsers, removeUser } from "../controllers/user";
import { Db } from "mongodb";

export const router = express.Router();

export default function userRoutes(app: Application, db: Db) {
  router.post("/register", (req, res) => registerUser(req, res, db));
  router.get("/users", (req, res) => getAllUsers(req, res, db));
  router.delete("/users/:username", (req, res) => removeUser(req, res, db));

  router.get("/test", (req, res) => {
    res.send("Hello World!");
  });

  app.use("/api", router);
}
