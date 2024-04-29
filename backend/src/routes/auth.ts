import express from "express";
import { Db } from "mongodb";
import { loginUser, registerUser } from "../controllers/auth";

const router = express.Router();

export function authRoutes(db: Db) {
  router.post("/register", (req, res) => registerUser(req, res, db));

  router.post("/login", (req, res) => loginUser(req, res, db));
}

export default router;
