import styled from "styled-components";

interface QuizHeaderProps {
  currentQuestion: number;
}
function QuizHeader({ currentQuestion }: QuizHeaderProps) {
  return (
    <>
      <HeaderTitle>Question {currentQuestion}/3</HeaderTitle>
      <ProgressSection>
        <ProgressBar></ProgressBar>
      </ProgressSection>
    </>
  );
}

const HeaderTitle = styled.h1`
  font-weight: 500;
`;

const ProgressSection = styled.div`
  width: 300px;
  height: 50px;
  border: 3px solid #ffc06b;
`;
const ProgressBar = styled.div`
  background: #ffc06b;
  height: 50px;
  width: 0;
`;

export default QuizHeader;
