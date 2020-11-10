import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthGardService } from "../SeviceHelpers/auth-gard.service"

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public url = "http://localhost:8080";
  public attemptedUrl = ""

  constructor(
    private http: HttpClient,
    private request: AuthGardService
    ) { }

  getAllData() {
    return this.http.get(this.url + "/allData");
  }
  getScores() {
    return this.http.get(this.url + "/getScore");
  }
  logIn(data) {
    return this.request.request(this.attemptedUrl, data)
  }
  allUsers() {
    return this.http.get(this.url + "/allUsers")
  }
  getCurrentUser() {
    return this.http.get(this.url + "/currentUser")
  }
  delScore(userId) {
    return this.http.delete(this.url + "/deleteScore", userId)
  }
  delAnswer(id) {
    return this.http.delete(this.url + "/deleteAnswer/" + id)
  }
  deleteUser(id) {
    return this.http.get(this.url + "/deleteUser/"+ id)
  }
  getUpdateScore(score){
    return this.http.post(this.url + "/AddScore",score)
  }
  updateCurrentScore(updatedScore) {
    return this.http.post(this.url+"/updateScore", updatedScore)
  }
  getUserInfo(name) {
    return this.http.post(this.url+ "/currentUserInfo", name)
  }
  updateUserInfo(newUserInfo) {
    return this.http.post(this.url +"/updateUserInfo", newUserInfo)
  }
  addNewUser(newUser) {
    return this.http.post(this.url + "/register" , newUser)
  }
}
