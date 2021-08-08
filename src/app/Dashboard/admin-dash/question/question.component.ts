import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionServiceService } from './../../../Services/question-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // *****************************************************************************************************************************************
  
  constructor(private qservice: QuestionServiceService, private snk: MatSnackBar,
    private quizRouter: Router, private active: ActivatedRoute) { }

  // *********************************************************************************************************************************************

  quizid;
  title;
  quesion = null;

  currentPage = 1;
  itemsPerPage = 5;

  // *****************************************************************************************************************************************************************

  ngOnInit(): void {

    this.quizid = this.active.snapshot.params.id;
    this.title = this.active.snapshot.params.title;
    //  console.log(this.id, this.title);


    this.qservice.getQuestionsOfQuiz(this.quizid).subscribe(data => {
      // console.log(data);
      this.quesion = data;

    })

  }

  // *********************************************************************************************************************************************************************

  dltQ(id: number) {

    Swal.fire({
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'delete',
      title: "Are you sure,want to delete this Question..?"
    }).then((result) => {
      if (result.isConfirmed) {

        this.qservice.deleteQuestions(id).subscribe(data => {


          this.ngOnInit();
        }, (err) => {
          console.log(err);
          Swal.fire("Error", "Somthing if wrong", "error");
        });


      }
    });


  }

  // ******************************************************************************************************************************************************

  updateQ(id, quizid, title) {
    this.quizRouter.navigate(['adminDashboard/update-question', id, quizid, title]);
  }


  // ******************************************************************************************************************************************************************
}
