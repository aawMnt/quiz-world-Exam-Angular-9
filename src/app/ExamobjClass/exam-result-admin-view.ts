import { Timestamp } from "rxjs";
import { ExamUserObj } from "./exam-user-obj";

export class ExamResultAdminView {

    rid:number;
    totalMarks:string;
    marksGot:number;
    correctAns:number;
    attempt:number;
    percentage:number;
    grade:string;
    title:string;
    examDate :Timestamp<any>
   
    users =new ExamUserObj();
}
