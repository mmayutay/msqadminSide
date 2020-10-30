import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthGardService } from '../../SeviceHelpers/auth-gard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private auth: AuthGardService,
    private router: Router
  ) { }

  canActivate() {
    if(this.auth.isLoggedin()) {
      return true
    }
    this.router.navigate(["/"])
    return false
  }
}
