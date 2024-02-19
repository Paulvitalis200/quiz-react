import styled from "styled-components";
import data from "./data/quizes.json";
import { useState } from "react";
import Quiz from "./components/Quiz";

interface QuizInterface {
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
  const [quizes, setQuizes] = useState<QuizInterface[] | null>(data);

  const searchQuiz = (event: any) => {
    const filteredQuizes = data.filter((quiz: QuizInterface) =>
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
            quizes.map((quiz: QuizInterface) => {
              return <Quiz key={quiz.id} quiz={quiz} />;
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

export default App;
