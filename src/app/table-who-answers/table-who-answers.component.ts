import { Component, OnInit, Input } from '@angular/core';
import {RequestService} from '../../../Services/request.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-table-who-answers',
  templateUrl: './table-who-answers.component.html',
  styleUrls: ['./table-who-answers.component.css']
})
export class TableWhoAnswersComponent implements OnInit {
  public CompanyName = "Amazon"
  public counter = 0
  public applicantsData;
  public peopleWhoAnswers = [];
  public arrayOfAnswers = []
  public typeButton = "View Answers";
  public applicantScore;

  constructor(
    private http: RequestService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.http.getScores().subscribe((scores) => {
      this.applicantScore = scores
    })
    this.http.getAllData().subscribe((data) => {
      this.applicantsData = data
      this.applicantsData.forEach(owner => {
        this.applicantScore.forEach(score => {
          if(owner._id == score.dataid){
            this.peopleWhoAnswers.push({owner: owner, score: score})
          }
        })
        if(!this.peopleWhoAnswers.includes(owner)) {
          this.peopleWhoAnswers.push({owner: owner, score: 0})
        }
      })
    })
  }

  answerChecking(applicantdata) {
    this.router.navigate(['checking-answers/' + applicantdata.owner._id])
  }

  deleteItem(data) {
    console.log(data)
  }

}
