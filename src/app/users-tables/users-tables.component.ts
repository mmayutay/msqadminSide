import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../Services/request.service'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-tables',
  templateUrl: './users-tables.component.html',
  styleUrls: ['./users-tables.component.css']
})
export class UsersTablesComponent implements OnInit {
  public ifAddUser = false
  public userData = {fullname: "", company: "", password: "", username: "", email: "", contactNumber: ""}
  public arrayOfAllUsers = []
  public allUsers;
  public returnValue;

  constructor(
    private http: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.allUsers().subscribe((data) => {
      this.allUsers = data
      this.allUsers.forEach(element => {
        if(element.username != "administrator") {
          element.password = window.btoa(element.password)
          this.arrayOfAllUsers.push(element)
        }
      });
    })
  }

  showTrue(boolean) {
    this.ifAddUser = boolean
  }

  submitNewUser() {
    this.http.addNewUser(this.userData).subscribe((returnValue) => {
      this.returnValue = returnValue
      if(this.returnValue.success){
        window.location.reload()
      }
    })
  }
  deleteUser(val, index) {
    this.http.deleteUser(val._id).subscribe((data) => {
      console.log(data)
      if(data) {
        this.arrayOfAllUsers.splice(index, 1)
      }else {
        Swal.fire("Sorry!", "You're unable to delete this user!", "error")
      }
    })
  }
}
