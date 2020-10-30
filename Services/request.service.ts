import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthGardService } from "../SeviceHelpers/auth-gard.service"

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public url = "http://localhost:8080"

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
    return this.request.request(data)
  }
  allUsers() {
    return this.http.get(this.url + "/allUsers")
  }
}
