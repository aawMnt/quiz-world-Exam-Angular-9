import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesServiceService } from './../../../Services/categories-service.service';
import { CategoriesComponent } from './../categories/categories.component';
import { QuestionServiceService } from './../../../Services/question-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { QuizServiceService } from 'src/app/Services/quiz-service.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  id=0;
  quiz=null;
  catg=null;
  constructor(private updateRouter : Router, private activeR : ActivatedRoute,
    private quizService : QuizServiceService , private updCat : CategoriesServiceService , private snk : MatSnackBar ) { }

  ngOnInit(): void {
   
    this.id =  this.activeR.snapshot.params.id;
    this.quizService.singalQuiz(this.id).subscribe(data=>{

        console.log(data);
        this.quiz=data;
    });


   this.updCat.cat().subscribe(data=>{

    this.catg=data;
   });
 }

 updateForm={
  title:'',
  description:'',
  numberOfQuestions:'',
 }

  quClick(quForm){
  
    if(this.updateForm.title == null || this.updateForm.description == null){
         this.snk.open("Enter Value in Update Filed","ok",{
           duration:5000,
         });
    }

    this.quizService.updateQuiz(this.quiz).subscribe(data=>{
          Swal.fire("Updated","Quiz Update Successfull...!!!","success").then((e)=>{
            this.updateRouter.navigate(['adminDashboard/view-quiz'])
          });
          
    },(err)=>{
      Swal.fire("Error","Error in Updating Quiz..","error");
    });

  }

}
