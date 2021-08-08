import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesServiceService } from 'src/app/Services/categories-service.service';
import { QuizServiceService } from 'src/app/Services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  catg = null;
  b;
  constructor(private qBuider: FormBuilder, private cat: CategoriesServiceService,
    private snk: MatSnackBar, private quiz: QuizServiceService) { }

  
  ngOnInit(): void {
    // quizForm = this.qBuider.group({
    //   title: [''],
    //   description: [''],
    //   numberOfQuestions: [''],
    //   maxMarks: [''],
    //   category: [''],
    //   active:['']

    // });


    this.cat.cat().subscribe(data => {
      // console.log(data);
      this.catg = data;
    });

    
  }

 

  qFrom = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      id: '',
    },

  }



  qClick(qForm) {
    // console.log(this.qFrom);

    if(this.qFrom.title.trim()=='' || this.qFrom.title==null){
      this.snk.open("enter the value","ok",{
        duration:5000,
      });
      return;
    }

    this.quiz.addQuiz(this.qFrom).subscribe(data => {

       console.log(data);
       this.b=data;
      
      
      // this.snk.open("quiz add done...!!!", "ok", {
      //   duration: 5000,
      
      // });

      Swal.fire('Success','Quiz is Add Successfull.','success');

    }, 
    (err) => {
      console.log(err);
      Swal.fire('Error', 'Error to add data of quiz','error');
    });


  }

}
