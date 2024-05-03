import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/components/ui/sidebar";

const VocabularyPage: React.FC = () => {
  const [savedWords, setSavedWords] = useState<string[]>([]);

  useEffect(() => {
    fetchSavedWords();
  }, []);

  const fetchSavedWords = async () => {
    const mockSavedWords = [
      { word: "apple", translation: "manzana" },
      { word: "banana", translation: "plátano" },
      { word: "orange", translation: "naranja" }
    ];
    setSavedWords(mockSavedWords);
  };

  return (
    <div className="flex h-screen justify-end">
      <Sidebar />
      <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-lg" style={{ width: "80%", minHeight: "100vh" }}>
        <h1 className="text-3xl font-semibold mb-4">Vocabulary</h1>
        <div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
          <ul className="space-y-2">
            {savedWords.map((word, index) => (
              <li key={index} className="flex justify-between bg-white p-4 rounded-lg shadow-md">
                <span className="text-lg">{word.word}</span>
                <span className="text-lg">{word.translation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VocabularyPage;
