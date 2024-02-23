import { useState } from "react";
import { OptionInterface, QuestionInterface } from "../models/quiz";
import Question from "./Question";

interface QuizProps {
  questions: QuestionInterface[];
  currentQuestion: number;
  //   answerQuestion: (option: OptionInterface) => void;
}
function Quiz({ questions, currentQuestion }: QuizProps) {
  console.log("PROPS: ", questions);
  const [question] = useState<QuestionInterface>(questions[currentQuestion]);

  console.log("HErE: ", currentQuestion);

  return (
    <>
      <Question question={question} />
    </>
  );
}

export default Quiz;
