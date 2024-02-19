import styled from "styled-components";
import data from "./data/quizes.json";
import { useState } from "react";

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

function App() {
  const [quizes, setQuizes] = useState<Quiz[] | null>(data);

  const searchQuiz = (event: any) => {
    const filteredQuizes = data.filter((quiz: Quiz) =>
      quiz.name.toLowerCase().includes(event.target.value.trim().toLowerCase())
    );
    setQuizes(filteredQuizes);
  };

  return (
    <>
      <Main>
        <Header>
          <Title>Quiz</Title>
          <Search placeholder="Search" onChange={searchQuiz}></Search>
        </Header>
        <QuizContainer>
          {quizes &&
            quizes.map((quiz: Quiz) => {
              return (
                <Quiz key={quiz.id}>
                  <QuizImage src={quiz.img}></QuizImage>
                  <QuizText>{quiz.name}</QuizText>
                  <QuizText>{quiz.questions.length} questions</QuizText>
                </Quiz>
              );
            })}
        </QuizContainer>
      </Main>
    </>
  );
}

const Main = styled.main`
  width: 80%;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: black;
  margin-right: 15px;
`;

const Header = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Search = styled.input`
  padding: 10px 5px;
  border: none;
  background: #efefef;
  border-radius: 5px;
  border: 0;
  outline: 0;
  width: 175px;
  :focus {
    outline: none !important;
  }
`;

const QuizContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Quiz = styled.div`
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

export default App;
