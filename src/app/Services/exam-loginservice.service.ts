import { ExamUserObj } from './../ExamobjClass/exam-user-obj';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamLoginserviceService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;

  public Token(loginform: any) {
    return this.http.post<any>(this.baseUrl + 'generate-token', loginform);
  }

  public LoginUser(token) {
    localStorage.setItem("token", token);
    // this.loginStatusSub.next(true);
    return true;
  }

  
  //user is login or not
  public isLogin() {
    let tokenStr = localStorage.getItem("token")
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    }
    else {
      return true;
    }
  }

  //loguot
  public Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //get token
  public getToken() {
    return localStorage.getItem('token');
  }
  //user save
  public setUserDetail(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
  //get user
  public getuser() {
    let UserStr = localStorage.getItem('user');
    if (UserStr != null) {
      return JSON.parse(UserStr);
    } else {
      this.Logout();
      return null;
    }
  }

  //get user roll
  public userRole(){
    let user =this.getuser()
    return user.authorities[0].authority;
  }
  //current user
  public curentUser():Observable<ExamUserObj>{
    return this.http.get<ExamUserObj>(this.baseUrl+'current-user');
  }
//fuction to change in nav bar

public loginStatusSub=new Subject<boolean>();

//ge all users

public allUsers():Observable<ExamUserObj>{
  return this.http.get<ExamUserObj>(this.baseUrl + 'user/allUsers');
}

}
