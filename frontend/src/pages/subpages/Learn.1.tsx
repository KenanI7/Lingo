import React, { useState } from "react";
import axios from "axios";
import Sidebar from "@/components/ui/sidebar";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Select } from "@radix-ui/react-select";

export const Learn: React.FC = () => {
  const [conversation, setConversation] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const form = useForm({
    defaultValues: {
      language: "",
      phrase: "",
    },
  });

  const onSubmit = async (data: { language: string; phrase: string }) => {
    console.log(data);
    // try {
    // } catch (error) {}
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
      <div className="flex flex-col justify-center bg-gray-100 p-8 rounded-lg shadow-lg w-[90%]">
        <h1 className="text-3xl font-semibold mb-4">
          Free Conversation Lesson
        </h1>
        <p className="text-lg mb-8">
          This allows you to improve your vocabulary by asking for example
          phrases for different situations.
        </p>
        <div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
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

                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Input {...form.register("phrase")} />
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
              {conversation.map((message, index) => (
                <div key={index} className="p-2 rounded-lg bg-white shadow-md">
                  {message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
