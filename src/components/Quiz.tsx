import styled from "styled-components";

interface Quiz {
  id: number;
  img: string;
  name: string;
  questions: Question[];
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface Option {
  id: number;
  label: string;
  text: string;
  isCorrect: boolean;
}

interface Props {
  quiz: Quiz;
}

function Quiz({ quiz }: Props) {
  return (
    <QuizCard>
      <QuizImage src={quiz.img}></QuizImage>
      <QuizText>{quiz.name}</QuizText>
      <QuizText>{quiz.questions.length} questions</QuizText>
    </QuizCard>
  );
}

const QuizCard = styled.div`
  width: 300px;
  min-height: 200px;
  background: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  color: #525252;
  padding-bottom: 5px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const QuizImage = styled.img`
  width: 100%;
  height: 75%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const QuizText = styled.p`
  padding: 0px 0 0 5px;
  margin: 0;
  &:first-of-type {
    font-weight: 700;
  }
`;
export default Quiz;
