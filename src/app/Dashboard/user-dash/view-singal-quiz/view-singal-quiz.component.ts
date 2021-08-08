import { QuizServiceService } from './../../../Services/quiz-service.service';
import { QuestionServiceService } from 'src/app/Services/question-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-singal-quiz',
  templateUrl: './view-singal-quiz.component.html',
  styleUrls: ['./view-singal-quiz.component.css']
})
export class ViewSingalQuizComponent implements OnInit {

  constructor(private _active  :ActivatedRoute , private _service : QuizServiceService) { }

  quizd=0;
  quizTitle;
  viewQuiz;

  ngOnInit(): void {

    this.quizd = this._active.snapshot.params.id;
    this.quizTitle = this._active.snapshot.params.title;
    this. findSingalQuizForView();
  }

  findSingalQuizForView(){

    this._service.singalQuiz(this.quizd).subscribe(data=>{
      console.log(data);
      this.viewQuiz = data;
    })

  }

}
