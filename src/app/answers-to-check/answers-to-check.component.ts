import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service'

@Component({
  selector: 'app-answers-to-check',
  templateUrl: './answers-to-check.component.html',
  styleUrls: ['./answers-to-check.component.css']
})
export class AnswersToCheckComponent implements OnInit {
  public correct = []
  public wrong = []
  public checkColor = ''
  public wrongColor = ''
  public color = false
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
  corrected(val) {
    if(!this.wrong.includes(val)) {
      this.correct.push(val)
    }else {
      this.wrong.splice(this.wrong.indexOf(val), 1)
      if(!this.correct.includes(val)) {
        this.correct.push(val)
      }
    }
  }
  wronged(val) {
    if(!this.correct.includes(val)) {
      this.wrong.push(val)
    }else {
      this.correct.splice(this.correct.indexOf(val), 1)
      if(!this.wrong.includes(val)) {
        this.wrong.push(val)
      }
    }
  }


}
