import styled from "styled-components";

interface QuizHeaderProps {
  currentQuestion: number;
  questions: number;
}
function QuizProgress({ currentQuestion, questions }: QuizHeaderProps) {
  const calculateLength = () => {
    return ((currentQuestion - 1) / questions) * 100;
  };
  return (
    <>
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

const ProgressSection = styled.div`
  width: auto;
  height: 50px;
  border: 3px solid #ffc06b;
`;

export default QuizProgress;
