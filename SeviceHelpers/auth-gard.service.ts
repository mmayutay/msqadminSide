import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenPayload, TokenResponse } from 'Models/UserDetails.model';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class AuthGardService {
  private token: String

  constructor(private httpClient: HttpClient, private http: Router) { }

  saveToken(token) {
    localStorage.setItem("mean-token", token);
    this.token = token
  }

  getToken() {
    if (!this.token) {
      this.token = localStorage.getItem("mean-token");
    }
    return this.token
  }

  logout() {
    this.token = ""
    localStorage.removeItem("mean-token");
    this.http.navigate(["/"])
  }

  getUserDetails() {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload)
    } else {
      return null
    }
  }
  isLoggedin() {
    const user = this.getUserDetails();
    if (user) {
      if (user.exp > Date.now() / 1000) {
        return true;
      } else {
         this.logout();
         return false
      }
    }
    return false;
  }
  request(user) {
    let base;
    base = this.httpClient.post("http://localhost:8080/login", { username: user.username, password: user.password })

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token)
        }
        return data
      }))
    return request;
  }

}
