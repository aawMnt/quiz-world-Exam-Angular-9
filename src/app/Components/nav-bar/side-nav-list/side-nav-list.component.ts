import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamLoginserviceService } from 'src/app/Services/exam-loginservice.service';

@Component({
  selector: 'app-side-nav-list',
  templateUrl: './side-nav-list.component.html',
  styleUrls: ['./side-nav-list.component.css']
})
export class SideNavListComponent implements OnInit {

  isUserActive = false;
  isUserActiveLogin = true;
  user = null;

  constructor(public login: ExamLoginserviceService, private loguotRout: Router ) { }

  ngOnInit(): void {
    this.isUserActive = this.login.isLogin();
    this.user = this.login.getuser();
    
    // this.login.loginStatusSub.asObservable().subscribe(data => {
    //   this.isUserActive = this.login.isLogin();
    //   this.user = this.login.getuser();
    // });

   if(this.isUserActive == true){
     this.isUserActiveLogin = false;
    
   }
  }

  logout() {
    this.login.Logout();
    location.reload();
    this.loguotRout.navigate(['login']);

  }

}
