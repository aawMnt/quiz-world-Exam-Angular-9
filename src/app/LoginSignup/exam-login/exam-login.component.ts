import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ExamLoginserviceService } from './../../Services/exam-loginservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-exam-login',
  templateUrl: './exam-login.component.html',
  styleUrls: ['./exam-login.component.css']
})
export class ExamLoginComponent implements OnInit {



  loginform: FormGroup;
  constructor(private loginBuilder: FormBuilder, private loginser: ExamLoginserviceService,
    private loginrout: Router, private snk: MatSnackBar) { }

  // *************************************************************************************************************************************
  ngOnInit(): void {

    this.loginform = this.loginBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

 }
  // ************************************************************************************************************************************
  loginsubmit() {
    // console.log(this.loginform.value)
    this.loginser.Token(this.loginform.value).subscribe(data => {

      console.log(data);

      this.loginser.LoginUser(data.token);
      // .............................................................................................................
      this.loginser.curentUser().subscribe(userData => {

        this.loginser.setUserDetail(userData);
        console.log(userData);
        // redirect to admin or user
        // .................................................................................................................................
        if (this.loginser.userRole() == "ADMIN") {

          this.loginser.loginStatusSub.next(true);
          this.loginrout.navigate(['adminDashboard']).then(r => {

            location.reload();
          });

        } else if (this.loginser.userRole() == 'NORMAL') {
          this.loginser.loginStatusSub.next(true);
          this.loginrout.navigate(['userDashboard/0']).then(r => {
            location.reload();
          });

        } else {
          this.loginser.Logout();
          location.reload();
        }

      });


    }, (err) => {
      console.log(err)
      this.snk.open("oops...Invalid Username Or Password....!!!Try again...", 'ok', {
        duration: 5000,
        verticalPosition: 'top',
      })

    });


  }


  reset() {
    this.loginform.reset();
  }

}
