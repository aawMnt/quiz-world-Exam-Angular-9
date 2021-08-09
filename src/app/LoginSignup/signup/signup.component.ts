import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginsignupserviceService } from './../../Services/loginsignupservice.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  singupfrom: FormGroup;

  constructor(private signbuider: FormBuilder, private signservice: LoginsignupserviceService,
    private snk: MatSnackBar , private _router :Router) { }

  ngOnInit(): void {
    this.singupfrom = this.signbuider.group({
      username: ['',[Validators.required,Validators.maxLength(12)]],
      password: ['',[Validators.required,Validators.maxLength(20)]],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      phoneNo: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]

    })
  }

  // public user={
  //   username:[''],
  //   password:[''],
  //   firstName:[''],
  //   lastName:[''],
  //   email:[''],
  //   phoneNo:['']
  // }

  signupsubmit() {
    this.signservice.signup(this.singupfrom.value).subscribe(data => {


      // console.log(data);

      if(data !=null){
        Swal.fire("Success", "Regisetreation Successfull...Thankyou.!!!", "success").then(res=>{
            this._router.navigate(['login']);
            this.singupfrom.reset();
        })
      
      }else{
        this.snk.open("Sorry ...User is Already Exist, please select unique username...!!!", 'ok', {
          duration: 5000,
          verticalPosition: 'top',
  
        });
      }

     }, (error) => {
      console.log(error);
     Swal.fire("Error","Sorry Server Not Responding",'error');
    });

  }





  reset() {
    this.singupfrom.reset();
  }

}
