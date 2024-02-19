export interface QuizInterface {
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
