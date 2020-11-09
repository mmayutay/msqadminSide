import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../Services/request.service'

@Component({
  selector: 'app-users-tables',
  templateUrl: './users-tables.component.html',
  styleUrls: ['./users-tables.component.css']
})
export class UsersTablesComponent implements OnInit {
  public ifAddUser = false
  public userData = {company: "", password: "", username: ""}
  public arrayOfAllUsers = []
  public allUsers;

  constructor(
    private http: RequestService
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

  showTrue() {
    this.ifAddUser = true
  }

  submitNewUser() {
    console.log("Able to Add!")
  }
}
