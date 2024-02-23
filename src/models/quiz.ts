export interface QuizInterface {
  id: number;
  img: string;
  name: string;
  questions: QuestionInterface[];
}

export interface QuestionInterface {
  id: number;
  text: string;
  options: OptionInterface[];
}

export interface OptionInterface {
  id: number;
  label: string;
  text: string;
  isCorrect: boolean;
}
