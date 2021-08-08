import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionServiceService } from 'src/app/Services/question-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-questions',
  templateUrl: './update-questions.component.html',
  styleUrls: ['./update-questions.component.css']
})
export class UpdateQuestionsComponent implements OnInit {

  public Editor = ClassicEditor;
  // *************************************************************************************************************************************************
  constructor(private activeQrouter: ActivatedRoute, private updateQservice: QuestionServiceService,
    private routerUpdate: Router, private snk: MatSnackBar) { }

  // *****************************************************************************************************************************************

  id = 0;
  title;
  quizId;
  questions;


  // ***************************************************************************************************************************************

  updateQuestions = {
    quiz: {

    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    ans: '',

  };
  // ************************************************************************************************************************************************************


  ngOnInit(): void {
    this.id = this.activeQrouter.snapshot.params.id;
    this.quizId = this.activeQrouter.snapshot.params.quizid;
    this.title = this.activeQrouter.snapshot.params.title;
    // console.log(this.id);


    this.updateQservice.singalQuestion(this.id).subscribe(data => {

      // console.log(data);
      this.questions = data;


    }, (err) => {
      console.log(err);
      Swal.fire("Error", "Sonthig is Wrong", "error");

    });
  }



  // ***********************************************************************************************************************************************************






  updateQuestion() {
    if (this.questions.content.trim() == '' || this.questions.content.trim() == null) {
      this.snk.open("Enter Value", "ok", {
        duration: 5000,
      });
      return;
    }
    if (this.questions.ans.trim() == '' || this.questions.ans.trim() == null) {
      this.snk.open("Enter Value", "ok")
      return;
    }

    this.updateQservice.updateQuestion(this.questions).subscribe(data => {

      Swal.fire("Success", "Update Question Successfully", "success").then((r) => {

        if (r.isConfirmed) {
          this.routerUpdate.navigate(['adminDashboard/question', this.quizId, this.title]);
        }
      });

    }, (err) => {
      Swal.fire("Error", "Sonthig is Wrong", "error");
    });

  }

}


