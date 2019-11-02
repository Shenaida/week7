import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
//automatisch toegevoegd na command  ng generate component heroes
import { HeroesComponent } from './heroes/heroes.component';
//automatisch toegevoegd na command  ng generate component hero-detail
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
// na ng generate component messages erbij gekomen
import { MessagesComponent } from './messages/messages.component';
// na ng generate module app-routing --flat --module=app erbij gekomen
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule //nieuwe externe modules die de app nodig heeft voor ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
