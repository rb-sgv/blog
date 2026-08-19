'use client';

import React, { useState } from 'react';

// Typendefinition für unsere Quiz-Fragen
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

// Alle Fragen: Programmier-Datentypen und Statistische Datentypen
const quizQuestions: Question[] = [
  {
    id: 1,
    question: "Welcher Datentyp wird in TypeScript typischerweise für Text verwendet?",
    options: ["Integer", "String", "Boolean", "Float"],
    correctAnswer: "String"
  },
  {
    id: 2,
    question: "Welcher dieser Werte ist ein korrekter 'Boolean'?",
    options: ["'true'", "1", "true", "null"],
    correctAnswer: "true"
  },
  {
    id: 3,
    question: "Wie nennt man eine geordnete Liste von Elementen in TypeScript?",
    options: ["Object", "String", "Tuple", "Array"],
    correctAnswer: "Array"
  },
  {
    id: 4,
    question: "Welcher Wert wird einer Variablen automatisch zugewiesen, wenn sie deklariert, aber nicht initialisiert wurde?",
    options: ["null", "undefined", "NaN", "0"],
    correctAnswer: "undefined"
  },
  {
    id: 5,
    question: "Welcher Datentyp wird am besten verwendet, um komplexe Daten als Schlüssel-Wert-Paare (Key-Value) zu speichern?",
    options: ["Object", "Array", "Number", "Boolean"],
    correctAnswer: "Object"
  },
  {
    id: 6,
    question: "Wie bezeichnet man einen Datentyp, der jeden beliebigen Wert innerhalb eines Intervalls annehmen kann (z.B. Körpergröße, Temperatur)?",
    options: ["Diskret", "Stetig (Kontinuierlich)", "Nominal", "Ordinal"],
    correctAnswer: "Stetig (Kontinuierlich)"
  },
  {
    id: 7,
    question: "Ein Datentyp, der nur isolierte, abzählbare Werte annehmen kann (z.B. Anzahl der Kinder, Würfelaugen), nennt man...",
    options: ["Diskret", "Stetig", "Qualitativ", "Fließkomma"],
    correctAnswer: "Diskret"
  },
  {
    id: 8,
    question: "Was versteht man unter einem 'häufbaren' Merkmal bei der Datenerfassung?",
    options: [
      "Ein Wert, der immer größer wird",
      "Ein Merkmal, das bei einer Beobachtung mehrere Ausprägungen gleichzeitig annehmen kann (z.B. Hobbys)",
      "Eine Zahl mit unendlich vielen Nachkommastellen",
      "Daten, die in einer Datenbank gestapelt werden"
    ],
    correctAnswer: "Ein Merkmal, das bei einer Beobachtung mehrere Ausprägungen gleichzeitig annehmen kann (z.B. Hobbys)"
  },
  {
    id: 9,
    question: "Welche Art von Datentyp klassifiziert Daten nach Kategorien ohne eine natürliche Reihenfolge (z.B. Haarfarbe, Automarke)?",
    options: ["Ordinal", "Nominal", "Stetig", "Binär"],
    correctAnswer: "Nominal"
  },
  {
    id: 10,
    question: "Wenn Datenkategorien eine klare Reihenfolge haben, aber die Abstände dazwischen nicht aussagekräftig sind (z.B. Schulnoten, Güteklassen), spricht man von...",
    options: ["Nominalen Daten", "Metrischen Daten", "Ordinalen Daten", "Stetigen Daten"],
    correctAnswer: "Ordinalen Daten"
  }
];

export default function DatatypeQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  // Funktion zum Überprüfen der Antwort
  const handleAnswerClick = (selectedOption: string) => {
    if (selectedOption === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  // Quiz zurücksetzen
  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-[#fe9100]/20 backdrop-blur-md rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#CBF3F0]">
        Datentypen Quiz
      </h2>

      {showResult ? (
        <div className="text-center">
          <p className="text-xl mb-4 text-[#CBF3F0]">
            Du hast <span className="font-bold text-[#2EC4B6]">{score}</span> von <span className="font-bold">{quizQuestions.length}</span> Fragen richtig beantwortet!
          </p>
          <button
            onClick={restartQuiz}
            className="w-full bg-[#2EC4B6] hover:bg-[#259e93] text-[#CBF3F0] font-semibold py-2 px-4 rounded transition-colors"
          >
            Quiz neustarten
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4 flex justify-between items-center text-sm text-[#CBF3F0]">
            <span>Frage {currentQuestionIndex + 1} / {quizQuestions.length}</span>
            <span>Punkte: {score}</span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-[#CBF3F0] mb-4">
              {quizQuestions[currentQuestionIndex].question}
            </h3>
            <div className="space-y-3">
              {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className="w-full text-left bg-[#fe9100]/20 backdrop-blur-md hover:bg-[#ffac3e] hover:border-[#2EC4B6] border text-[#CBF3F0] hover:text-[#2EC4B6] py-3 px-4 rounded transition-all duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}