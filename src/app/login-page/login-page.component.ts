import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../Services/request.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public addUser = false
  public cr = "Trial!"
  public userdata = {username: "", password: ""}; 
  public creatingUser = {email: "", user: ""}
  public bool;

  constructor(
    private router: Router,
    private http: RequestService
  ) { }

  ngOnInit(): void {
  }

  logIn() {
    this.http.logIn(this.userdata).subscribe((data) => {
      this.bool = data
      if (this.bool.data.success) {
        if(this.bool.url == "") {
          this.router.navigate(["/home"])
        }else {
          this.router.navigate([this.bool.url]) 
        }
      }else {
        Swal.fire("Snap!", "User or Password is incorrect!", "error")
      }
    })
  }
  forgotPassword() {
    this.http.recoverPassword(this.userdata).subscribe((returnValue) => {
      if(returnValue) {
        Swal.fire("Sorry", "We're very sorry about this, but don't worry, your password will be recovered soon!", "info")
      }else {
        Swal.fire("Oooppss", "We've found out that you are not a member, ask the administrator to have an account", 'info')
      }
    })
  }
  createToTrue() {
    this.addUser = true
  }
  addRequest() {
    this.http.addingNewUserThroughEmail(this.creatingUser).subscribe((data) => {
      if(data) {
        Swal.fire("Congrats", "I think this coming day, you will have your account!", "success")
        window.location.reload()
      } 
    })
  }
}
