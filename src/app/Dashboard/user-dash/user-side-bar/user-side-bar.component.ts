import { ExamUserObj } from './../../../ExamobjClass/exam-user-obj';
import { CategoriesServiceService } from './../../../Services/categories-service.service';
import { Component, OnInit } from '@angular/core';
import { ExamLoginserviceService } from 'src/app/Services/exam-loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-side-bar',
  templateUrl: './user-side-bar.component.html',
  styleUrls: ['./user-side-bar.component.css']
})
export class UserSideBarComponent implements OnInit {
catg;

users : ExamUserObj= new ExamUserObj();
id=0;
  constructor(private cat : CategoriesServiceService , public login: ExamLoginserviceService ,private r: Router) { }

  ngOnInit(): void {

    this.cat.cat().subscribe(data=>{
      // console.log(data);
      this.catg=data;

    },(err)=>{
      console.log(err);
    });


    this.login.curentUser().subscribe(data=>{

      this.id = data.id;
    })

   
    
  }

  logout(){
    this.login.Logout();
    this.r.navigate(['/']);
    location.reload();
  }

  
  result(){
     this.r.navigate(["/history/"+ this.id])
  }

}
