import React, { useState } from "react";
import axios from "axios";
import Sidebar from "@/components/ui/sidebar";

import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/form";
import { useQuery } from "@tanstack/react-query";
import { generatePhrases, savePhraseToVocabulary } from "@/api/language";
import toast, { Toaster } from "react-hot-toast";

const Learn: React.FC = () => {
  const [conversation, setConversation] = useState<string[]>([]);
  const [phrases, setPhrases] = useState<
    { phrase: string; translation: string; language: string }[]
  >([]);

  const form = useForm({
    defaultValues: {
      language: "",
      input: "",
    },
  });

  const onSubmit = async (data: { language: string; input: string }) => {
    const response = await generatePhrases(data);

    if (response) {
      setPhrases(response);
    }

    // try {
    // } catch (error) {}
  };

  const saveToVocabulary = async (data: {
    phrase: string;
    translation: string;
    language: string;
  }) => {
    try {
      const userId = localStorage.getItem("user");

      const response = await savePhraseToVocabulary({
        ...data,
        userId,
      });

      if (response.success) {
        toast("Saved to vocabulary!", {
          icon: "🎉",
        });
      } else {
        toast.error("Error saving to vocabulary!", {
          icon: "❌",
        });
      }
    } catch (error) {
      console.error("Error saving word to vocabulary:", error);
    }
  };

  return (
    <div className="flex h-screen justify-end">
      <Sidebar />
      <div className="flex flex-col justify-start items-center bg-gray-100 p-8 rounded-lg shadow-lg w-[90%]">
        <h1 className="text-3xl font-semibold mb-4">
          Free Conversation Lesson
        </h1>
        <p className="text-lg mb-8">
          This allows you to improve your vocabulary by asking for example
          phrases for different situations.
        </p>
        <div className="w-[60%] bg-gray-100 p-8 rounded-lg shadow-lg">
          <Toaster />
          <div className="flex flex-col space-y-4">
            <FormProvider {...form}>
              <form action="" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col space-y-2">
                  <div className="flex w-full justify-between">
                    <label
                      htmlFor="inputText"
                      className="font-semibold text-lg"
                    >
                      Choose a language and write up a question such as: "How do
                      I ask for directions ?"
                    </label>
                  </div>

                  <div>
                    <FormLabel>Language</FormLabel>
                    <Input {...form.register("language")} className="w-[20%]" />
                  </div>

                  <div>
                    <FormLabel>Phrase</FormLabel>
                    <Input {...form.register("input")} />
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 md:px-3 rounded-md w-fit text-xl self-end ml-4"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </form>
            </FormProvider>
          </div>
          <div className="mt-8">
            <div className="space-y-2">
              {phrases.length !== 0 &&
                phrases.map((phrase, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-white shadow-md flex justify-between"
                  >
                    <p>
                      {phrase.phrase} - {phrase.translation}{" "}
                    </p>
                    <button
                      onClick={() => saveToVocabulary(phrase)}
                      className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer p-2 rounded-md"
                    >
                      Save to vocabulary
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
