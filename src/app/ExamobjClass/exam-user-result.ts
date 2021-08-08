import { Timestamp } from 'rxjs';
import { User } from './../../../../book-store/src/app/model/User ';
import { userInfo } from 'os';
import { ExamUserObj } from './exam-user-obj';
export class ExamUserResult {

    
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
