import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Sidebar from "@/components/ui/sidebar";

const Lessons: React.FC = () => {
    const [completedLessons, setCompletedLessons] = useState<Set<number>>(
        new Set()
    );

    const lessons = [
        { id: 1, title: "Lesson 1" },
        { id: 2, title: "Lesson 2" },
        { id: 3, title: "Lesson 3" },
        { id: 4, title: "Lesson 4" },
        { id: 5, title: "Lesson 5" },
    ];

    const handleLessonCompletion = (lessonId: number) => {
        const updatedCompletedLessons = new Set<number>(completedLessons);
        if (completedLessons.has(lessonId)) {
            updatedCompletedLessons.delete(lessonId);
        } else {
            updatedCompletedLessons.add(lessonId);
        }
        setCompletedLessons(updatedCompletedLessons);
    };

    const handleStartLesson = (lessonId: number) => {
        console.log("Starting lesson", { lessonId });
    };

    return (
        <div className="flex justify-end">
            <Sidebar />
            <div className="flex bg-gray-100 p-8 rounded-lg shadow-lg justify-center w-[90%]">
                <div className="flex justify-center w-full">
                    <div className="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-semibold mb-4">Choose a Lesson</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {lessons.map((lesson) => (
                                <div
                                    key={lesson.id}
                                    className="bg-white rounded-lg p-6 shadow-md flex-1"
                                >
                                    <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
                                    <div className="flex items-center mb-4">
                                        <input
                                            type="checkbox"
                                            checked={completedLessons.has(lesson.id)}
                                            onChange={() => handleLessonCompletion(lesson.id)}
                                            className="mr-2"
                                        />
                                        <label>Completed</label>
                                    </div>
                                    {/* Wrap the button with Link to navigate to the corresponding level subpage */}
                                    <Link to={`/level${lesson.id}`}>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                                            onClick={() => handleStartLesson(lesson.id)}
                                        >
                                            Start Lesson
                                        </button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lessons;
