import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthGuard implements CanActivate {
  loggedIn:boolean = true;


  constructor(private localSt:LocalStorageService){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // checking if logged in
    if(this.localSt.retrieve('currentUser')){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }

    return this.loggedIn;
  }
}
