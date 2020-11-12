import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableWhoAnswersComponent} from './table-who-answers/table-who-answers.component';
import {LoginPageComponent} from "./login-page/login-page.component";
import { AnswersToCheckComponent } from "./answers-to-check/answers-to-check.component";
import { AuthGuardService } from "./auth-guard.service"
import { UsersTablesComponent } from './users-tables/users-tables.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginPageComponent},
  {path: "home", component: TableWhoAnswersComponent, canActivate: [AuthGuardService]},
  {path: "checking-answers/:id", component: AnswersToCheckComponent, canActivate: [AuthGuardService]},
  {path: "users", component: UsersTablesComponent, canActivate: [AuthGuardService]},
  {path: "edit-my-info/:id", component: EditUserDetailsComponent, canActivate: [AuthGuardService]},
  {path: "404-not-found", component: NotFoundComponent},
  {path: "**", redirectTo: "404-not-found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
