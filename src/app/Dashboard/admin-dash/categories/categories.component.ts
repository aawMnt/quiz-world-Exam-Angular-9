import { MatSnackBar } from '@angular/material/snack-bar';
import { CatHelp } from './catHelp';
import { FormGroup } from '@angular/forms';
import { CategoriesServiceService } from './../../../Services/categories-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cat = null;
  help: CatHelp[];
  currentPage = 1;
  itemsPerPage = 5;

  constructor(private catservice: CategoriesServiceService, private snk: MatSnackBar) { }

  ngOnInit(): void {

    this.catservice.cat().subscribe(data => {
      // console.log(data);
      this.cat = data;
    });
  }
  catDelete(h: CatHelp) {

    Swal.fire({
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      title: "Are you sure..delete the Categories..???"
    }).then((result) => {

      if (result.isConfirmed) {
        this.catservice.deleteCat(h.id).subscribe((data) => {
          this.snk.open("Categorie Is Deleted.....!!!", "ok", {
            duration: 5000,
          });
          this.ngOnInit();

        }, (err) => {
          console.log(err);
          Swal.fire("Error", "Something is Wrong...!!!", "error")
        });
      }


    });



  }

}
