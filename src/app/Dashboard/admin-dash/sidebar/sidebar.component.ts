import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ExamLoginserviceService } from 'src/app/Services/exam-loginservice.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private r: Router, public login: ExamLoginserviceService) { }

  ngOnInit(): void {
  }
  logout() {
    this.login.Logout();
    this.r.navigate(['/']);
    location.reload();
  }
}
