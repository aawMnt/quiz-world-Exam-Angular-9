import { CatHelp } from './../Dashboard/admin-dash/categories/catHelp';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesServiceService {
  splice: any;
  indexOf: any;

  constructor(private http:HttpClient) {}
    
  baseUrl = environment.baseUrl;

  public cat(){
    return this.http.get(this.baseUrl +'category/');
  }

  // public catDelete(id:number){
  //     this.http.delete(this.baseUrl+'/');
  // }

  public addCat(addcatForm:any){
    return this.http.post(this.baseUrl+'category/',addcatForm);
  }

  public deleteCat(id:number){
 return this.http.delete<CatHelp[]>(this.baseUrl+'category/'+id);

  }

 
}
