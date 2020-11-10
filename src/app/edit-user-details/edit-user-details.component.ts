import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { RequestService } from "../../../Services/request.service"
import { AuthGardService } from "../../../SeviceHelpers/auth-gard.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: './edit-user-details.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent implements OnInit {
  public user;
  public newPassword = ""

  constructor(
    private activeRoute: ActivatedRoute,
    private http: RequestService,
    private auth: AuthGardService
  ) { }

  ngOnInit(): void {
    let value = this.activeRoute.snapshot.paramMap.get('id')
    this.http.getUserInfo({name: value}).subscribe((data) => {
      this.user = data[0]
    })
  }

  newData() {
    if(this.newPassword != "") {
      this.user.password = this.newPassword
    }
    console.log(this.user)
    this.http.updateUserInfo(this.user).subscribe((data) => {
      this.auth.logout();
      Swal.fire({
        title: 'Good Bye!',
        text: "See you sooner or later!",
        icon: 'success',
        allowOutsideClick: false
      });
    })
  }
}
