import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { QuizServiceService } from 'src/app/Services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {

  quizs = null;
  currentPage = 1;
  itemsPerPage = 4;
  
  constructor(private qservice: QuizServiceService, private snk: MatSnackBar,private quizRouter:Router) { }

  ngOnInit(): void {
    this.qservice.Quiz().subscribe(data => {

      //  console.log(data);
     
      this.quizs = data;
    }, (err) => console.log(err));
  }

  qDelete(id: number) {

    Swal.fire({
      icon: 'warning',
      title: "Are you sure..?",
      confirmButtonText: 'Delete',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {

        this.qservice.deleteQuiz(id).subscribe(data => {
          this.snk.open("Quiz Deleted Successfull....!!!", "ok", {
            duration: 5000,
          })
          this.ngOnInit();

        });
      }
    })
  }


  updateQuiz(id:number){
    this.quizRouter.navigate(['adminDashboard/update-quiz',id]);
}



QuitionsinQuiz(id,title){

    this.quizRouter.navigate(['adminDashboard/question',id,title]);
  
}

}
