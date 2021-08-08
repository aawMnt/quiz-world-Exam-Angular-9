import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginsignupserviceService {

  constructor(private http : HttpClient) { }

  baseUrl = environment.baseUrl;

  signup(singupfrom:FormGroup){
    return this.http.post<any>(this.baseUrl + 'user/',singupfrom);
  }
  
}
