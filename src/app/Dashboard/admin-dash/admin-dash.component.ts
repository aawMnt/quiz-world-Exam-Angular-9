import { ExamLoginserviceService } from './../../Services/exam-loginservice.service';
import { LoginsignupserviceService } from './../../Services/loginsignupservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  constructor( private _service : ExamLoginserviceService) { }

  ngOnInit(): void {

    window.onbeforeunload = function() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return '';
    };
 
  }

}
