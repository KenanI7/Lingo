import express, { Application } from "express";
import { getAllUsers, removeUser } from "../controllers/user";
import { Db } from "mongodb";

const router = express.Router();

export function userRoutes(db: Db) {
  router.get("/", (req, res) => getAllUsers(req, res, db));

  router.delete("/:username", (req, res) => removeUser(req, res, db));
}

export default router;
