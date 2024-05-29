import express from "express";
import { Db } from "mongodb";
import { generatePhrases, getPhrases, savePhrase } from "../controllers/lang";

const router = express.Router();

export function langRoutes(db: Db) {
  router.post("/phrases/save", (req, res) => savePhrase(req, res, db));
  router.get("/phrases/:userId", (req, res) => getPhrases(req, res, db));
  router.post("/phrases/:language", (req, res) => generatePhrases(req, res));
}

export default router;
