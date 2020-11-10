import { Component, OnInit, Input } from '@angular/core';
import {RequestService} from '../../../Services/request.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-table-who-answers',
  templateUrl: './table-who-answers.component.html',
  styleUrls: ['./table-who-answers.component.css']
})
export class TableWhoAnswersComponent implements OnInit {
  public currentUser
  public allUsers
  public deleted = false
  public CompanyName = ""
  public counter = 0
  public applicantsData;
  public peopleWhoAnswers = [];
  public arrayOfAnswers = []
  public typeButton = [];
  public applicantScore;
  public applicantsID = []

  constructor(
    private http: RequestService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.http.allUsers().subscribe((users) => {
      this.allUsers = users
      this.http.getCurrentUser().subscribe((data) => {
        this.currentUser = data
        if(this.currentUser.name == "Administrator") {
          this.router.navigate(['/users'])
        }
        this.allUsers.forEach(element => {
          if(element.fullname == this.currentUser.name){
            this.CompanyName = element.company
          }
        });
      })
    })
    this.http.getScores().subscribe((scores) => {
      this.applicantScore = scores
    })
    this.http.getAllData().subscribe((data) => {
      this.applicantsData = data
      this.applicantsData.forEach(owner => {
        this.applicantScore.forEach(score => {
          if(owner._id == score.dataid){
            this.peopleWhoAnswers.push({owner: owner, score: score, alreadyHadScore: true})
            this.applicantsID.push(owner._id)
          }
        })
        if(!this.applicantsID.includes(owner._id)){
          this.peopleWhoAnswers.push({owner: owner, score: 0})
        }
      })
      this.peopleWhoAnswers.forEach(element => {
        if(!element.alreadyHadScore) {
          this.typeButton.push("View Answers")
        }else {
          this.typeButton.push("Update Score")
        }
      });
    })
  }

  answerChecking(applicantdata) {
    this.router.navigate(['checking-answers/' + applicantdata.owner._id])
  }

  deleteItem(data, index) {
    this.peopleWhoAnswers.splice(index, 1)
    this.deleted = true
    this.counter += 1
    this.http.delAnswer(data.owner._id).subscribe((value) => {
      if(value) {
        this.http.delScore({dataid: data.score._id}).subscribe((response) => {
          console.log(response)
        })
      }
    })
  }

}
