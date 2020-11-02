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
  public cr = "Trial!"
  public userdata = {username: "", password: ""}; 
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
}
