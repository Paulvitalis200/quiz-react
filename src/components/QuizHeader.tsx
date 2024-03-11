import styled from "styled-components";

interface QuizHeaderProps {
  currentQuestion: number;
  questions: number;
}
function QuizHeader({ currentQuestion, questions }: QuizHeaderProps) {
  return (
    <>
      <HeaderTitle>
        Question {currentQuestion - 1}/{questions}
      </HeaderTitle>
    </>
  );
}

const HeaderTitle = styled.h1`
  font-weight: 500;
`;

export default QuizHeader;
