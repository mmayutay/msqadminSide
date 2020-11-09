import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../../../Services/request.service';
import { checkingAnswers } from '../../../Models/correctingData.model'

@Component({
  selector: 'app-answers-to-check',
  templateUrl: './answers-to-check.component.html',
  styleUrls: ['./answers-to-check.component.css']
})
export class AnswersToCheckComponent implements OnInit {
  public applicantsName = ""
  public value = new checkingAnswers()
  public correct = []
  public wrong = []
  public id = ""
  public allData;
  public arrayOfQuestions = []
  public dataScore = {dataid:"",name:"",score:0,mistake:0};
  public scoresData
  public booleanUpdate = false

  constructor(
    private activeRoute: ActivatedRoute,
    private http: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get("id")
    this.http.getScores().subscribe((scores) => {
      this.scoresData = scores
    })
    this.http.getAllData().subscribe((data) => {
      this.allData = data

      this.allData.forEach(element => {
        if (element._id == this.id) {
          this.arrayOfQuestions = element.answers
          this.applicantsName = element.name
        }
      })
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
    this.dataScore.dataid = this.id
    this.dataScore.name = this.applicantsName
    this.dataScore.score = this.correct.length
    this.dataScore.mistake = this.wrong.length   
    this.scoresData.forEach(element => {
      if(element.dataid == this.id) {
        this.booleanUpdate = true
      }else {
        this.booleanUpdate = false
      }
    }); 
    if (!this.booleanUpdate) {
      console.log("Naa diri")
      this.http.getUpdateScore(this.dataScore).subscribe((value) => {
        if(value) {
          this.router.navigate(['/home'])
        }
      })
    }else {
      this.http.updateCurrentScore(this.dataScore).subscribe((response) => {
        if(response) {
          this.router.navigate(['/home'])
        }
      })
    }
  }

}
