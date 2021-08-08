import { QuizServiceService } from './../../../Services/quiz-service.service';
import { QuestionServiceService } from './../../../Services/question-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, private cat: QuizServiceService, private _r: Router) { }
  catId;
  catg;

  // pagination 
  currentPage = 1;
  itemsPerPage = 6;

  //search
  searchTitle: string;

  ngOnInit(): void {



    // console.log(this.catId);


    this.activeroute.params.subscribe((params) => {

      this.catId = params.id;


      if (this.catId == 0) {

        console.log("all quiz...");
        this.cat.activeQuiz().subscribe(data => {
          this.catg = data;
          // console.log(data);

        }, (err) => {
          console.log(err);
          Swal.fire("Error", "Something is wrong... ", "error")
        });


      } else {
        // console.log("specific");
        // this.catg=[];

        this.cat.getActiveQuizofCat(this.catId).subscribe(data => {
          // console.log(data);
          this.catg = data;

        }, (err) => {
          console.log(err);
          Swal.fire("Error", "Something is wrong... ", "error")
        });

      }



    });





  }

  view(id, title) {

    this._r.navigate(['/userDashboard/view-quiz/' + id, title])

  }

  //  search 
  search() {

    if (this.searchTitle == '') {
      this.ngOnInit();
    } else {
      this.catg = this.catg.filter(res => {
        return res.title.toLocaleLowerCase().match(this.searchTitle.toLocaleLowerCase()) ||
          res.maxMarks.toString().match(this.searchTitle.toString()) ||
          res.category.title.toLocaleLowerCase().match(this.searchTitle.toLocaleLowerCase())
      });
    }

  }

}
