import { ActivatedRoute } from '@angular/router';
import { QuestionServiceService } from './../../../Services/question-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesServiceService } from './../../../Services/categories-service.service';
import {FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor = ClassicEditor;

//  ************************************************************************************************************************************************ 
  
  id;
  title;

// ****************************************************************************************************************************************************
  questions = {
    quiz: {

    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    ans: '',

  };

  // ********************************************************************************************************************************************************
  
  constructor(private qBuider: FormBuilder, private cat: CategoriesServiceService,
    private snk: MatSnackBar, private quiz: QuestionServiceService, private ActivRoute: ActivatedRoute) { }

    // *******************************************************************************************************************************************************************
  
  
  
    ngOnInit(): void {
    this.id = this.ActivRoute.snapshot.params.id;
    this.title = this.ActivRoute.snapshot.params.title;
    // console.log(this.id);

    this.questions.quiz['id'] = this.id;

  }

  // ************************************************************************************************************************************************************************


  addQuestion() {
    if (this.questions.content.trim() == '' || this.questions.content.trim() == null) {
      this.snk.open("Enter Value", "ok",{
       duration:5000,
      });
      return;
    }
    if (this.questions.ans.trim() == '' || this.questions.ans.trim() == null) {
      this.snk.open("Enter Value", "ok")
      return;
    }

    this.quiz.postQuestions(this.questions).subscribe(data => {
      Swal.fire("Success", "Question Add Successful...", "success");
      this.questions.content=''
      this.questions.option1=''
      this.questions.option2=''
      this.questions.option3=''
      this.questions.option4=''
      this.questions.ans=''
      

    }, (err) => {
      Swal.fire("Error", "Something is Wrong", "error");
    });
  }

// ****************************************************************************************************************************************************



}
