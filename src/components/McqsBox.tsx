"use client";
import { useState } from "react";
const McqsBox = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: string }>({});
    const mcqQuestions = [
        {
            id: 1,
            question: "What is the primary purpose of React?",
            options: ["To style web pages", "To manage state", "To build user interfaces", "To handle backend tasks"],
            correctAnswer: "To build user interfaces",
        },
        {
            id: 2,
            question: "What hook is used for managing component state?",
            options: ["useEffect", "useContext", "useState", "useReducer"],
            correctAnswer: "useState",
        },
        // Add more questions as needed
    ];
    const handleAnswerSelect = (questionId: number, option: string) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [questionId]: option,
        }));
    };

    return (
        <div className="flex flex-col gap-10 mt-2">
            <h1 className="font-semibold text-2xl">MCQ Questions</h1>
            {mcqQuestions.map((question) => (
                <ol
                    key={question.id}
                    className="w-[500px] list-decimal"
                >
                    <li className="text-lg font-semibold text-gray-800 mb-4">{question.question}</li>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {question.options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleAnswerSelect(question.id, option)}
                                className={`py-2 px-4 rounded-lg text-left border transition-all duration-300 ${selectedAnswers[question.id] === option
                                        ? "bg-blue-100 border-blue-400 text-blue-700 font-semibold"
                                        : "bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100"
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {selectedAnswers[question.id] && (
                        <p
                            className={`mt-3 ${selectedAnswers[question.id] === question.correctAnswer ? "text-green-600" : "text-red-600"
                                } font-medium`}
                        >
                            {selectedAnswers[question.id] === question.correctAnswer
                                ? "Correct Answer!"
                                : "Incorrect. Try again."}
                        </p>
                    )}
                </ol>
            ))}
        </div>
    )
}

export default McqsBox
