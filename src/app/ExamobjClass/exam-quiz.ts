import { ExamQuestions } from './exam-questions';
export class ExamQuiz {

    id:number
    title:string
    description:string
    maxMarks:string
    numberOfQuestions:string
    active:boolean;
    question : ExamQuestions[];
}
