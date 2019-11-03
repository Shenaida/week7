import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
//alle routing-zake worden hier geregeld, dus niet alleen vanuit hoofdmenu, hieronder hero-detail vanuit heroes path
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

//routes is een variabele die in [RouterModule.forRoot()] gaat.
// een array van alle URL path's en de daarbij behorende component, bv localhost:4200/heroes
// let op dat je de component wel importeert, want dan weet
//app-routing.module, waar de component zit.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }, 
  //hier detail in path met een parameter, maar niet alleen hier plaatsen, ook de routerlink plaatsen op de html waar nodig
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: DashboardComponent }, 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },//default route, als er niks wordt ingevuld in de url-balk
];

//hier wordt de router gebruikt en luistert naar alle browser locaties
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//de RouterModule is beschikbaar door de hele app, door de 'export'
export class AppRoutingModule { }