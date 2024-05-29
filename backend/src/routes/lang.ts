import express from "express";
import { Db } from "mongodb";
import { getPhrases } from "../controllers/lang";

const router = express.Router();

export function langRoutes(db: Db) {
  router.get("/phrases/:language", (req, res) => getPhrases(req, res));
}

export default router;
