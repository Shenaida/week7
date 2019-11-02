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

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //nieuwe externe module die de app nodig heeft voor ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
