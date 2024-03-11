import { OptionInterface, QuestionInterface } from "../models/quiz";
import styled from "styled-components";

interface QuizProps {
  questions: QuestionInterface[];
  currentQuestion: number;
  answerQuestion: (option: OptionInterface) => void;
}
function Quiz({ questions, currentQuestion, answerQuestion }: QuizProps) {
  const question = questions[currentQuestion - 1];

  return (
    <>
      <QuestionText>{question.text}</QuestionText>
      {question.options.map((option: OptionInterface) => (
        <QuestionContainer
          key={option.id}
          onClick={() => answerQuestion(option)}
        >
          <OptionLabel>{option.label}</OptionLabel>
          <OptionText>{option.text}</OptionText>
        </QuestionContainer>
      ))}
    </>
  );
}

const QuestionText = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: 400;
`;

const QuestionContainer = styled.div`
  background: rgb(236, 236, 236);
  margin-bottom: 10px;
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

const OptionLabel = styled.p`
  background: #fad099;
  padding: 10px 15px;
  margin: 0;
`;
const OptionText = styled.p`
  padding: 10px;
  margin: 0;
`;
export default Quiz;
