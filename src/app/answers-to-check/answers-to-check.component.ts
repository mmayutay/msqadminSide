import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service'

@Component({
  selector: 'app-answers-to-check',
  templateUrl: './answers-to-check.component.html',
  styleUrls: ['./answers-to-check.component.css']
})
export class AnswersToCheckComponent implements OnInit {
  public correct = 0
  public wrong = 0
  public id = ""
  public allData;
  public arrayOfQuestions = []

  constructor(
    private activeRoute: ActivatedRoute,
    private http: RequestService
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get("id")
    this.http.getAllData().subscribe((data) => {
      this.allData = data

      this.allData.forEach(element => {
        if (element._id == this.id) {
          this.arrayOfQuestions = element.answers
        }
      });
    })
  }
  corrected() {
    this.correct += 1;
  }
  wronged() {
    this.wrong +=1;

  }


}
