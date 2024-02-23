import styled from "styled-components";
import { OptionInterface, QuestionInterface } from "../models/quiz";

interface QuestionProps {
  question: QuestionInterface;
  answerQuestion: (option: OptionInterface) => void;
}

function Question({ question, answerQuestion }: QuestionProps) {
  console.log("MY QUESTION: ", question);
  // const [question, setQuestion] = useState(question)
  return (
    <>
      <QuestionText>{question.text}</QuestionText>
      {question.options.map((option: OptionInterface) => (
        <QuestionContainer key={option.id}>
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
export default Question;
