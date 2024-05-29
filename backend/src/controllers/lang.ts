import { Request, Response } from "express";
import { openai } from "../config/openai";
import { Db } from "mongodb";

export const getPhrases = async (req: Request, res: Response, db: Db) => {
  try {
    const phrasesCollection = db.collection("phrases");

    const phrases = await phrasesCollection
      .find({ userId: req.params.userId })
      .toArray();

    res.json(phrases);
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

export const generatePhrases = async (req: Request, res: Response) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a language teacher helping a student practice ${req.params.language}. Send back all data as a list of JSON objects with the following properties: phrase, translation, language (all lowercase, ${req.params.language}). It should be a list and each phrase/translation pair should be a seperate object. Always return 5 phrases.`,
        },
        {
          role: "user",
          content: req.body.input,
        },
      ],
    });

    if (!response.choices[0].message.content)
      return res.status(500).json({ message: "Error fetching phrases" });

    res.json(JSON.parse(response.choices[0].message.content));
  } catch (error) {
    console.log(error);
    res.json({ message: error });
  }
};

export const savePhrase = async (req: Request, res: Response, db: Db) => {
  try {
    const { language, phrase, translation, userId } = req.body;

    console.log(req.body);

    const phrasesCollection = db.collection("phrases");

    await phrasesCollection.insertOne({
      language,
      phrase,
      translation,
      userId,
    });

    res.status(201).json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error });
  }
};
