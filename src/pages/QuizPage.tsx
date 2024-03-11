import { useParams } from "react-router-dom";
import data from "../data/quizes.json";
import { OptionInterface, QuizInterface } from "../models/quiz";
import QuizHeader from "../components/QuizHeader";
import Quiz from "../components/Quiz";
import styled from "styled-components";
import { useState } from "react";
import Results from "../components/Results";
import QuizProgress from "../components/QuizProgress";

function QuizPage() {
  const { id } = useParams();

  const quiz: QuizInterface | undefined = data.find(
    (quiz: QuizInterface) => quiz.id === parseInt(id!)
  );
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

  const answerQuestion = (option: OptionInterface) => {
    if (option.isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    if (quiz) {
      if (currentQuestion <= quiz.questions.length)
        setCurrentQuestion(currentQuestion + 1);
    }
  };
  if (!quiz) return <>No quiz found with that ID</>;
  return (
    <Main>
      <QuizHeader
        currentQuestion={currentQuestion}
        questions={quiz.questions.length}
      />
      <QuizProgress
        currentQuestion={currentQuestion}
        questions={quiz.questions.length}
      />
      {currentQuestion <= quiz.questions.length && (
        <>
          <Quiz
            questions={quiz.questions}
            currentQuestion={currentQuestion}
            answerQuestion={answerQuestion}
          />
        </>
      )}

      {currentQuestion > quiz.questions.length && (
        <Results
          correctAnswers={correctAnswers}
          questions={quiz.questions.length}
        />
      )}
    </Main>
  );
}

const Main = styled.main`
  width: 70%;
  margin: 0 auto;
`;

export default QuizPage;
