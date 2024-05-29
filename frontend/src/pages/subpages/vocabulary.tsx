import React, { useState, useEffect } from "react";
import Sidebar from "@/components/ui/sidebar";
import { useQuery } from "@tanstack/react-query";
import { getSavedPhrases } from "@/api/language";

const VocabularyPage: React.FC = () => {
  const { data: savedPhrases } = useQuery({
    queryKey: ["savedPhrases"],
    queryFn: () => getSavedPhrases(),
  });

  console.log(savedPhrases);

  return (
    <div className="flex h-screen justify-end">
      <Sidebar />
      <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-lg w-[90%]">
        <h1 className="text-3xl font-semibold mb-4">Vocabulary</h1>
        <div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
          Italian 🇮🇹
          <ul className="space-y-2">
            {savedPhrases && savedPhrases.length > 0 ? (
              savedPhrases
                .filter((phrase) => phrase.language === "italian")
                .map((phrase, index) => (
                  <li
                    key={index}
                    className="flex gap-4 bg-white p-4 rounded-lg shadow-md"
                  >
                    <span className="text-lg">{phrase.phrase}</span>
                    <p>-</p>
                    <span className="text-lg">{phrase.translation}</span>
                  </li>
                ))
            ) : (
              <p>No saved words</p>
            )}
          </ul>
        </div>

        <div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
          Swedish 🇮🇸🇪
          <ul className="space-y-2">
            {savedPhrases && savedPhrases.length > 0 ? (
              savedPhrases
                .filter((phrase) => phrase.language === "swedish")
                .map((phrase, index) => (
                  <li
                    key={index}
                    className="flex gap-4  bg-white p-4 rounded-lg shadow-md"
                  >
                    <span className="text-lg">{phrase.translation}</span>
                    <p>-</p>
                    <span className="text-lg">{phrase.phrase}</span>
                  </li>
                ))
            ) : (
              <p>No saved words</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VocabularyPage;
