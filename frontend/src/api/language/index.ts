import axios from "axios";

export type GetPhrases = {
  language: string;
  input: string;
};

export type SavePhrase = {
  language: string;
  phrase: string;
  translation: string;
  userId: string;
};

export const getSavedPhrases = async () => {
  try {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user");

    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/lang/phrases/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const generatePhrases = async (data) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/lang/phrases/${data.language}`,
      {
        input: data.input,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const savePhraseToVocabulary = async (data: SavePhrase) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/lang/phrases/save`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
