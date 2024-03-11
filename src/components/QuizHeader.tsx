import styled from "styled-components";

interface QuizHeaderProps {
  currentQuestion: number;
  questions: number;
}
function QuizHeader({ currentQuestion, questions }: QuizHeaderProps) {
  const calculateLength = () => {
    return ((currentQuestion - 1) / questions) * 100;
  };
  return (
    <>
      <HeaderTitle>
        Question {currentQuestion}/{questions}
      </HeaderTitle>
      <ProgressSection>
        <div
          style={{
            background: "#ffc06b",
            height: "50px",
            width: `${calculateLength()}%`,
          }}
        ></div>
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

export default QuizHeader;
