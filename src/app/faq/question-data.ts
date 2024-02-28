export interface QuestionData {
  question: string;
  answer: string;
  id: number;
  isLink: boolean;
  isButton: boolean;
  isTable: boolean;
  isAnswer1: boolean;
  answer1: string;
  link: string;
  buttonName: string;
  host: string;
  port: number;
  threads: number;
  timeout: number;
  reConnect: number;
}
