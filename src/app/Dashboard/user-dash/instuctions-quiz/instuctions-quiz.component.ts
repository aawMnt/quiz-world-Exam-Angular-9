import { QuizServiceService } from './../../../Services/quiz-service.service';
import { QuestionServiceService } from './../../../Services/question-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instuctions-quiz',
  templateUrl: './instuctions-quiz.component.html',
  styleUrls: ['./instuctions-quiz.component.css']
})
export class InstuctionsQuizComponent implements OnInit {

  qid;
  quiz;
  quizMarkes: number = 0;
  totalMarks;
  title;

  constructor(private activeRoute: ActivatedRoute,
    private quizService: QuizServiceService, private _router: Router) { }

  ngOnInit(): void {

    this.qid = this.activeRoute.snapshot.params.id;

    this.quizService.singalQuiz(this.qid).subscribe((data: any) => {

      this.quiz = data;
      this.totalMarks = data.maxMarks;
      this.title = data.title;
      this.quizMarkes = parseFloat(Number(data.maxMarks / data.numberOfQuestions).toFixed(2));

    }, (err) => {
      console.log(err);
    });

  }

  // *******************************************************start button ****************************************************************8
  start() {
    Swal.fire({
      title: 'Do you want Start the Quiz?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Start`,
      denyButtonText: `Don't Start`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Quiz Start...All The Best', '', 'success')

        this._router.navigate(['/start/' + this.qid, this.totalMarks, this.title]).then(e => {

        });
      } else if (result.isDenied) {
        Swal.fire('Quiz Not Start', '', 'info')
      }
    })

  }

  // ********************************************************************************************************************************


}
