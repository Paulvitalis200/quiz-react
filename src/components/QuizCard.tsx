import styled from "styled-components";
import { QuizInterface } from "../models/quiz";

interface Props {
  quiz: QuizInterface;
}

function QuizCard({ quiz }: Props) {
  return (
    <Card>
      <QuizImage src={quiz.img}></QuizImage>
      <QuizText>{quiz.name}</QuizText>
      <QuizText>{quiz.questions.length} questions</QuizText>
    </Card>
  );
}

const Card = styled.div`
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
export default QuizCard;
