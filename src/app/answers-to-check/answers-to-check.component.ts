import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../Services/request.service';
import { checkingAnswers } from '../../../Models/correctingData.model'

@Component({
  selector: 'app-answers-to-check',
  templateUrl: './answers-to-check.component.html',
  styleUrls: ['./answers-to-check.component.css']
})
export class AnswersToCheckComponent implements OnInit {
  public boolean = true
  public applicantsName = ""
  public value = new checkingAnswers()
  public correct = []
  public wrong = []
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
          this.applicantsName = element.name
        }
      });
    })
  }
  corrected(val) {
    document.getElementById(val).style.backgroundColor = "rgb(171, 255, 195)"
    this.value.answerChecking(this.wrong, this.correct, val)
  }
  wronged(val) {
    document.getElementById(val).style.backgroundColor = "rgba(253, 206, 206)"
    this.value.answerIsWrong(this.wrong, this.correct, val)
  }

  submitScores() {
    console.log(this.correct)
  }

}
