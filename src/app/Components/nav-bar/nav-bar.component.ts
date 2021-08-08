import { Router } from '@angular/router';
import { ExamLoginserviceService } from './../../Services/exam-loginservice.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
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

  @Output() public sidenavToggle = new EventEmitter();

  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }


}
