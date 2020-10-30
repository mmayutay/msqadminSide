import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableWhoAnswersComponent} from './table-who-answers/table-who-answers.component';
import {LoginPageComponent} from "./login-page/login-page.component";
import { AnswersToCheckComponent } from "./answers-to-check/answers-to-check.component";
import { AuthGuardService } from "./auth-guard.service"

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginPageComponent},
  {path: "home", component: TableWhoAnswersComponent, canActivate: [AuthGuardService]},
  {path: "checking-answers/:id", component: AnswersToCheckComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
