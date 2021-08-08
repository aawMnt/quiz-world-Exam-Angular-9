import { ExamresultserviceService } from './../../../Services/examresultservice.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users-exam-history',
  templateUrl: './users-exam-history.component.html',
  styleUrls: ['./users-exam-history.component.css']
})
export class UsersExamHistoryComponent implements OnInit {

  constructor(private _service: ExamresultserviceService) { }

  getAllHistory;
  historyEmpety = false;
  currentPage = 1;
  itemsPerPage = 4;
  //search
  adminHistory: any;

  ngOnInit(): void {
    this.getHistory();
  }


  getHistory() {
    this._service.adminGetAllExamUsers().subscribe((data: any) => {
      // console.log(data);
      this.getAllHistory = data;
      this.grd();

      if (data.length == 0) {

        this.historyEmpety = true;

      }
    })

  }


  grd() {

    this.getAllHistory.forEach(e => {

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

  delete(id) {




    Swal.fire({
      title: 'Do you want to delete this Result?',
      showCancelButton: true,
      icon: 'question',
      confirmButtonColor: '#aa2e25',
      confirmButtonText: `Delete`,

    }).then((result) => {

      if (result.isConfirmed) {

        this._service.deleteSingalHistroty(id).subscribe(data => {
          this.getHistory();
          Swal.fire('Delete!', '', 'success')
        });
      }


    })
  }


  //search
  Search() {
    if (this.adminHistory == '') {
      this.getHistory();
    } else {
      this.getAllHistory = this.getAllHistory.filter(res => {
        return res.users.firstName.toLocaleLowerCase().match(this.adminHistory.toLocaleLowerCase()) || 
        res.users.lastName.toLocaleLowerCase().match(this.adminHistory.toLocaleLowerCase()) ||
          res.users.username.toLocaleLowerCase().match(this.adminHistory.toLocaleLowerCase()) ||
          res.users.email.toLocaleLowerCase().match(this.adminHistory.toLocaleLowerCase()) ||
          res.users.phoneNo.toString().match(this.adminHistory.toString()) 
          
      })
    }
  }
}
