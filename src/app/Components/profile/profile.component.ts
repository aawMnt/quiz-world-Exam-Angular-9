import { ExamLoginserviceService } from './../../Services/exam-loginservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user=null;
  constructor(private loginservice : ExamLoginserviceService ) { }

  ngOnInit(): void {

      this.user= this.loginservice.getuser();
  }

}
