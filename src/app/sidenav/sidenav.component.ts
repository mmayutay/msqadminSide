import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';
import { AuthGardService } from "../../../SeviceHelpers/auth-gard.service"

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  public hideNav = false

  constructor(
    private router: Router,
    private http: AuthGardService
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.http.logout()
    Swal.fire({
      title: 'Good Bye!',
      text: "See you sooner or later!",
      icon: 'success',
      allowOutsideClick: false
    })
    this.router.navigate(['login'])
  }

  hideAndShow(bool) {
    this.hideNav = bool
  }

}
