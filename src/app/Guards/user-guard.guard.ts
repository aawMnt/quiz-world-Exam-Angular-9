import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExamLoginserviceService } from '../Services/exam-loginservice.service';

@Injectable({
  providedIn: 'root'
})

export class UserGuardGuard implements CanActivate {
  constructor(private login: ExamLoginserviceService, private guardRouter: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.login.isLogin() && this.login.userRole() == 'NORMAL') {
      return true;
    }
    this.guardRouter.navigate(['login']);
    return false;

  }
}


