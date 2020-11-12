import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { TableWhoAnswersComponent } from './table-who-answers/table-who-answers.component';
import { AnswersToCheckComponent } from './answers-to-check/answers-to-check.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { UsersTablesComponent } from './users-tables/users-tables.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    TableWhoAnswersComponent,
    AnswersToCheckComponent,
    SidenavComponent,
    FooterComponent,
    CompanyDetailsComponent,
    UsersTablesComponent,
    EditUserDetailsComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
