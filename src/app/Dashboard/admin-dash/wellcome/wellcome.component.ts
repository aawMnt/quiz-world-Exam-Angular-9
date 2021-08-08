import { QuestionServiceService } from './../../../Services/question-service.service';
import { CategoriesServiceService } from './../../../Services/categories-service.service';
import { ExamLoginserviceService } from 'src/app/Services/exam-loginservice.service';
import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/Services/quiz-service.service';

@Component({
  selector: 'app-wellcome',
  templateUrl: './wellcome.component.html',
  styleUrls: ['./wellcome.component.css']
})
export class WellcomeComponent implements OnInit {

  // ***************************************************************************************************************************************
  countUsers;
  users: number;
  aniUser: any = 0;
// *************************************************************************************************************************************
 countCat;
  cat: number;
  aniCat: any = 0;
 // ************************************************************************************************************************************************
 countQuiz;
  quiz: number;
  aniQuiz: any = 0;
//  *************************************************************************************************************************************************
 countQuestions;
  questions: number;
  aniQuestions: any = 0;
 // *****************************************************************************************************************************************************

  constructor(private loginService: ExamLoginserviceService,
    private catService: CategoriesServiceService
    , private quizService: QuizServiceService , private QuestionService:QuestionServiceService) { }

  //  ***************************************************************************************************************************************************************

  ngOnInit(): void {

    this.loginService.allUsers().subscribe(data => {
      this.countUsers = data
      this.users = this.countUsers.length;

    });

    // **********************************************************************************************************************************************

    this.catService.cat().subscribe(data => {

      this.countCat = data;
      this.cat = this.countCat.length;
    });

    //  ****************************************************************************************************************************************************************

    this.quizService.Quiz().subscribe(data => {

      this.countQuiz = data;
      this.quiz = this.countQuiz.length;
    });

    // **************************************************************************************************************************************

    this.QuestionService.allQuestions().subscribe(data => {

      this.countQuestions = data;


      this.questions = this.countQuestions.length;
    });
  }

}
