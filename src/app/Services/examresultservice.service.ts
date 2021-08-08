import { ExamResultAdminView } from './../ExamobjClass/exam-result-admin-view';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamUserResult } from '../ExamobjClass/exam-user-result';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamresultserviceService {

  constructor(private http : HttpClient) { }
  
  baseUrl = environment.baseUrl;

  
//send result in data base

public userExamResult(result:ExamUserResult):Observable<ExamUserResult>{
  return this.http.post<ExamUserResult>(this.baseUrl +'result/usersResults',result)
}

//find result by user id 

public singalUserResult(id:number):Observable<ExamUserResult>{
  return this.http.get<ExamUserResult>(this.baseUrl + 'result/findResultByUser/' + id)
}

//delete singal result
 
public deleteSingalResult(id:number):Observable<ExamUserResult>{
  return this.http.delete<ExamUserResult>(this.baseUrl+'result/deleteResult/' + id)
}

//for admin result view

public adminPostResults(adminResult:ExamResultAdminView):Observable<ExamResultAdminView>{
  return this.http.post<ExamResultAdminView>(this.baseUrl +'result/postResultinAdmin',adminResult )
}

// get all exam given users

public adminGetAllExamUsers():Observable<ExamResultAdminView>{
  return this.http.get<ExamResultAdminView>(this.baseUrl +'result/adminResultView');
}
//delete singal history
public deleteSingalHistroty(id:number){
  return this.http.delete(this.baseUrl+'result/deleteHistory/' + id)
}


}
