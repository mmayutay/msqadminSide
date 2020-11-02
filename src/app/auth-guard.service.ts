import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot ,RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthGardService } from '../../SeviceHelpers/auth-gard.service';
import { RequestService } from "../../Services/request.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private auth: AuthGardService,
    private router: Router,
    private http: RequestService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.auth.isLoggedin()) {
      this.attemptedUrl(state.url)
      this.router.navigate(['/'])
      return false
    }
    return true
  }

  attemptedUrl(url: String) {
    this.http.attemptedUrl = url.toString()
  }
}
