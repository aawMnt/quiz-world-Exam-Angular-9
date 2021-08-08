import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesServiceService } from './../../../Services/categories-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  addcatForm: FormGroup;
  constructor(private addService: CategoriesServiceService, private addB: FormBuilder, private snak: MatSnackBar) { }

  ngOnInit(): void {
    this.addcatForm = this.addB.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

  }
  addSubmit() {
    this.addService.addCat(this.addcatForm.value).subscribe(data => {
      //  console.log(data);
      this.addcatForm.reset();
     Swal.fire("Success","Add Categories is Successfull","success")
    }, (err) => {
      console.log(err);
      Swal.fire("Error","Something is wrong","error");
    });

  }
}
