import { Link } from "react-router-dom";
import styled from "styled-components";

interface Answers {
  correctAnswers: number;
  questions: number;
}

function Results({ correctAnswers, questions }: Answers) {
  return (
    <Main>
      <p>Your results</p>
      <Score>
        {correctAnswers} / {questions}
      </Score>
      <Link to={"/"}>Go Back</Link>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const Score = styled.h1`
  font-weight: 400;
  font-size: 50px;
  margin: 0;
`;

export default Results;
