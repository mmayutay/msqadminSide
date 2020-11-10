import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { AuthGardService } from "../../../SeviceHelpers/auth-gard.service";
import { RequestService } from "../../../Services/request.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public arrayValue = []
  public User = {}
  public hideNav = false
  public hide = false

  constructor(
    private router: Router,
    private http: AuthGardService,
    private request: RequestService
  ) { }

  ngOnInit(): void {
    this.request.getCurrentUser().subscribe((data) => {
      this.User = data
      this.arrayValue.push(data)
      if(this.arrayValue[0].name == "administrator") {
        this.hide = true
      }
    })
  }

  logOut() {
    this.http.logout()
    this.request.attemptedUrl = ""
    Swal.fire({
      title: 'Good Bye!',
      text: "See you sooner or later!",
      icon: 'success',
      allowOutsideClick: false
    });
    
    this.router.navigate(['login'])
  }

  hideAndShow(bool) {
    this.hideNav = bool
  }
  goToUserInfo() {
    this.router.navigate(['edit-my-info/'+this.arrayValue[0].id])
  }

}
