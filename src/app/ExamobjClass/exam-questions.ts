import { ExamQuiz } from "./exam-quiz"

export class ExamQuestions {
   
    id:number
    content:string
    option1:string
    option2:string
    option3:string
    option4:string
    ans:string;
    givenAns:string
    quiz = new ExamQuiz();
}
