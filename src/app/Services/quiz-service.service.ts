import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ExamQuiz } from '../ExamobjClass/exam-quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  public Quiz(): Observable<ExamQuiz> {

    return this.http.get<ExamQuiz>(this.baseUrl + 'quiz/');
  }

  public addQuiz(quiz): Observable<ExamQuiz> {
    return this.http.post<ExamQuiz>(this.baseUrl + 'quiz/', quiz);
  }

  public deleteQuiz(id): Observable<ExamQuiz> {
    return this.http.delete<ExamQuiz>(this.baseUrl + 'quiz/' + id);
  }
  public singalQuiz(id): Observable<ExamQuiz> {
    return this.http.get<ExamQuiz>(this.baseUrl + 'quiz/' + id)
  }
  public updateQuiz(quiz): Observable<ExamQuiz> {
    return this.http.put<ExamQuiz>(this.baseUrl + 'quiz/', quiz);

  }
  //get quizes category
  public getQuizofCat(id) {
    return this.http.get(this.baseUrl + 'quiz/cat/' + id);
  }
  //get active quiz
  public activeQuiz() {
    return this.http.get(this.baseUrl + 'quiz/active')
  }
  // get active quizes of cat
  public getActiveQuizofCat(id) {
    return this.http.get(this.baseUrl + 'quiz/cat/active/' + id);
  }



}
