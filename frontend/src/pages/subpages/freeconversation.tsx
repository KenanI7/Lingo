import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/components/ui/sidebar";

const FreeConversation: React.FC = () => {
  const [conversation, setConversation] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/conversation", { inputText });
      const newConversation = [...conversation, inputText, response.data.reply];
      setConversation(newConversation);
      setInputText("");
    } catch (error) {
      console.error("Error fetching conversation:", error);
    }
  };

  const saveHighlightedWords = () => {
    if (window.rangy) {
      const selectedText = window.rangy.getSelection().toString();
      if (selectedText) {
        saveToVocabulary(selectedText);
      }
    } else {
      console.error('Rangy library not available.');
    }
  };


  const saveToVocabulary = async (word: string) => {
    try {
      const response = await axios.post("/api/save-word", { word });
      console.log("Response when armani connects it:", response.data);
    } catch (error) {
      console.error("Error saving word to vocabulary:", error);
    }
  };


  return (
    <div className="flex h-screen justify-end">
      <Sidebar />
      <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-lg shadow-lg" style={{ width: "80%", minHeight: "100vh" }}>
        <h1 className="text-3xl font-semibold mb-4">Free Conversation Lesson</h1>
        <p className="text-lg mb-8">This lesson allows you to have a free-form conversation. Simply type your message in the text area and click "Send" to receive a response.
          You can highlight any word from the response and save it to your vocabulary, the word will be saved along with the translation.</p>
        <div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="inputText" className="font-semibold text-lg">Write your question, statement, ask for translation or simply strike up a conversation:</label>
              <textarea id="inputText" className="border rounded-lg p-4 h-32" value={inputText} onChange={(e) => setInputText(e.target.value)}></textarea>
            </div>
            <div className="flex justify-end">
              <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 md:px-3 rounded-lg text-sm w-fit text-xl self-end" onClick={saveHighlightedWords}>Add to Vocabulary</button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 md:px-3 rounded-lg text-sm w-fit text-xl self-end ml-4" onClick={handleSubmit}>Send</button>
            </div>
          </div>
          <div className="mt-8">
            <div className="space-y-2">
              {conversation.map((message, index) => (
                <div key={index} className="p-2 rounded-lg bg-white shadow-md">{message}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeConversation;
