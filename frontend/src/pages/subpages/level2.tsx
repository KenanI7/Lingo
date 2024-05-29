// Level2.tsx
import React, { useState } from 'react';
import Question from '../../lib/Question';

const questions = [
    {
        question: 'What is the antonym of "ephemeral"?',
        choices: ['Permanent', 'Fleeting', 'Short-lived'],
        answer: 'Permanent',
    },
    {
        question: 'What is the meaning of the word "ubiquitous"?',
        choices: ['Rare', 'Everywhere', 'Unique'],
        answer: 'Everywhere',
    },
    {
        question: 'Which of the following sentences is grammatically correct?',
        choices: ['She don’t like apples.', 'She doesn’t like apples.', 'She not likes apples.'],
        answer: 'She doesn’t like apples.',
    },
    {
        question: 'What is the past participle of "go"?',
        choices: ['Went', 'Gone', 'Going'],
        answer: 'Gone',
    },
    {
        question: 'Which sentence uses the subjunctive mood correctly?',
        choices: ['If I was you, I would apologize.', 'If I were you, I would apologize.', 'If I am you, I would apologize.'],
        answer: 'If I were you, I would apologize.',
    },
];

const Level2: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (answer: string) => {
        if (answer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            alert(`Question finished. You scored ${score} / ${questions.length}`);
            window.location.href = '/lessons';

        }

    };

    return (
        <div>
            <h1 className="text-center">Quiz App - Level 2</h1>
            {currentQuestion < questions.length ? (
                <Question
                    question={questions[currentQuestion].question}
                    choices={questions[currentQuestion].choices}
                    answer={questions[currentQuestion].answer}
                    onAnswer={handleAnswer}
                />
            ) : "null"
            }
        </div>
    )
}

export default Level2;