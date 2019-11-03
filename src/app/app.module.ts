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
//hiermee kan je applicatie dmv http protocol met een externe server praten
import { HttpClientModule }    from '@angular/common/http';
//n-memory Web API is intercepting those requests, applying them to an in-memory data store, and returning simulated responses
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,//nieuwe externe modules die de app nodig heeft voor ngModel

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    //HeroSearchComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
