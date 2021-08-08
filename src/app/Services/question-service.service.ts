import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExamQuestions } from '../ExamobjClass/exam-questions';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  baseUrl = environment.baseUrl;


  constructor(private http: HttpClient) { }



  public getQuestionsOfQuiz(id): Observable<ExamQuestions> {
    return this.http.get<ExamQuestions>(this.baseUrl + 'question/quiz/all/' + id);

  }



  public getQuestionsOfQuizForStart(id): Observable<ExamQuestions> {
    return this.http.get<ExamQuestions>(this.baseUrl + 'question/quiz/' + id);

  }


  public postQuestions(questions) {
    return this.http.post(this.baseUrl + 'question/', questions);
  }


  public deleteQuestions(id) {
    return this.http.delete(this.baseUrl + 'question/' + id);
  }

  public singalQuestion(id) {
    return this.http.get(this.baseUrl + 'question/' + id);
  }

  public updateQuestion(questions) {
    return this.http.put(this.baseUrl + 'question/', questions)
  }

  public allQuestions() {
    return this.http.get(this.baseUrl + 'question/allQuestions')
  }

  public checkedQuestionFromBackend(question) {
    return this.http.post(this.baseUrl + 'question/checked-questions', question);
  }






}