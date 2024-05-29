import React, { useState } from 'react';
import Question from '../../lib/Question';

const questions = [
    {
        question: 'What is the synonym of "happy"?',
        choices: ['Sad', 'Joyful', 'Angry'],
        answer: 'Joyful',
    },
    {
        question: 'Which of the following is a noun?',
        choices: ['Run', 'Quickly', 'Apple'],
        answer: 'Apple',
    },
    {
        question: 'Which word is a verb?',
        choices: ['Beautiful', 'Jump', 'Happiness'],
        answer: 'Jump',
    },
    {
        question: 'What is the antonym of "old"?',
        choices: ['Young', 'Big', 'Small'],
        answer: 'Young',
    },
    {
        question: 'Which sentence is in the past tense?',
        choices: ['I will go to the store.', 'I am going to the store.', 'I went to the store.'],
        answer: 'I went to the store.',
    },
];

const Level1: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (answer: string) => {
        const isCorrect = answer === questions[currentQuestion].answer;
        const nextQuestion = currentQuestion + 1;

        if (isCorrect) {
            setScore(score + 1); // Update the score
        }

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            // Check if all questions are answered correctly before showing the alert
            const finalScore = isCorrect ? score + 1 : score; // Include the current question in the score calculation
            alert(`Question finished. You scored ${finalScore} / ${questions.length}`);
            simulateLessonCompletion(1);
            window.location.href = '/lessons';
        }
    };

    const simulateLessonCompletion = (lessonId: number) => {
        console.log(`Lesson ${lessonId} completed!`);
    };

    return (
        <div>
            <h1 className="text-center">Quiz App</h1>
            {currentQuestion < questions.length ? (
                <Question
                    question={questions[currentQuestion].question}
                    choices={questions[currentQuestion].choices}
                    answer={questions[currentQuestion].answer}
                    onAnswer={handleAnswer}
                />
            ) : null}
        </div>
    );
};

export default Level1;
