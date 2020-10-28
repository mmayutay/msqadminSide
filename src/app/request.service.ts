import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public url = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getAllData() {
    return this.http.get(this.url + "/allData");
  }
  getScores() {
    return this.http.get(this.url + "/getScore");
  }
  logIn(data) {
    return this.http.post(this.url + "/login", data)
  }
}
