import { ExamresultserviceService } from './../../../Services/examresultservice.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-exam-historyof-user',
  templateUrl: './exam-historyof-user.component.html',
  styleUrls: ['./exam-historyof-user.component.css']
})
export class ExamHistoryofUserComponent implements OnInit {

  constructor(private _active: ActivatedRoute, private _result: ExamresultserviceService) { }

  resultId = 0;
  userResults;
  p: any;
  historySearch:any;

  historyEmpety = false;


  ngOnInit(): void {

    this.resultId = this._active.snapshot.params.id;
    this.getResult();

}

  getResult() {

    this._result.singalUserResult(this.resultId).subscribe((data: any) => {
      // console.log(data);
      this.userResults = data;

      if (data.length == 0) {

        this.historyEmpety = true;

      }

       this.grd();
    })
  }

  deleteResult(rid) {
    //  console.log(rid);

    Swal.fire({
      title: 'Do you want to delete this Result?',
      showCancelButton: true,
      icon: 'question',
      confirmButtonColor: '#aa2e25',
      confirmButtonText: `Delete`,

    }).then((result) => {

      if (result.isConfirmed) {

        this._result.deleteSingalResult(rid).subscribe(data => {
          Swal.fire('Delete!', '', 'success')
          console.log("dlert")
          this.getResult();
        })
      }


    })


  }


  grd() {

    this.userResults.forEach(e => {

      if (e.percentage == 100) {
        e.grade = "A+"

      }
      if (e.percentage <= 80) {
        e.grade = "A"

      }
      if (e.percentage <= 60) {
        e.grade = "B"

      }
      if (e.percentage <= 40) {
        e.grade = "C"
      }
      if (e.percentage <= 10) {
        e.grade = "C-"
      }
      if (e.percentage == 0) {
        e.grade = "F"

      }



    });
  }

  print() {
    window.print();
  }

  //search
  search(){
    if(this.historySearch == ''){
      this.ngOnInit();
    }else{
      this.userResults = this.userResults.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.historySearch.toLocaleLowerCase()) ||
        res.totalMarks.toString().match(this.historySearch.toString())
      })
    }
  }

}
