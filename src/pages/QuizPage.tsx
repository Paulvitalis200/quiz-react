import { useParams } from "react-router-dom";
import data from "../data/quizes.json";
import { OptionInterface, QuizInterface } from "../models/quiz";
import QuizHeader from "../components/QuizHeader";
import Results from "../components/Results";
import Quiz from "../components/Quiz";
import styled from "styled-components";
import { useState } from "react";

function QuizPage() {
  const { id } = useParams();

  const quiz = data.find((quiz: QuizInterface) => quiz.id === parseInt(id!));
  const [currentQuestion] = useState(1);
  // const [correctAnswers, setCorrectAnswers] = useState(0);

  // const answerQuestion = (option: OptionInterface) => {
  //   console.log("OPTION CLICKED");
  // };
  console.log(quiz);
  if (!quiz) return <>No quiz found with that ID</>;
  return (
    <Main>
      <QuizHeader currentQuestion={currentQuestion} />
      <Quiz
        questions={quiz.questions}
        currentQuestion={currentQuestion}
        // answerQuestion={answerQuestion}
      />
      {/* <Results /> */}
    </Main>
  );
}

const Main = styled.main`
  width: 70%;
  margin: 0 auto;
`;

export default QuizPage;
