import { Request, Response } from "express";
import { openai } from "../config/openai";

export const getPhrases = async (req: Request, res: Response) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are a language teacher helping a student practice ${req.params.language}. Send back all data in a JSON object with the following properties: phrase, translation. It should be a list and each phrase/translation pair should be a seperate object`,
        },
        {
          role: "user",
          content: "write me 5 phrases for when I am in a cafe.",
        },
      ],
    });

    if (!response.choices[0].message.content)
      return res.status(500).json({ message: "Error fetching phrases" });

    res.json(JSON.parse(response.choices[0].message.content));
  } catch (error) {}
};
