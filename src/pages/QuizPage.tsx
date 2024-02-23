import { useParams } from "react-router-dom";
import data from "../data/quizes.json";
import { QuizInterface } from "../models/quiz";
import QuizHeader from "../components/QuizHeader";
import Question from "../components/Question";
import Results from "../components/Results";

function QuizPage() {
  const { id } = useParams();

  const quiz = data.find((quiz: QuizInterface) => quiz.id === parseInt(id!));

  console.log(quiz);
  if (!quiz) return <>No quiz found with that ID</>;
  return (
    <>
      <QuizHeader />
      <Question />
      <Results />
    </>
  );
}

export default QuizPage;
