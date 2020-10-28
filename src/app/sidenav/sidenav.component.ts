import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    Swal.fire({
      title: 'Good Bye!',
      text: "See you sooner or later!",
      icon: 'success',
      allowOutsideClick: false
    })
    this.router.navigate(['login'])
  }

}
