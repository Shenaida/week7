import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

//routes is een variabele die in [RouterModule.forRoot()] gaat.
// een array van alle URL path's en de daarbij behorende component, bv localhost:4200/heroes
// let op dat je de component wel importeert, want dan weet
//app-routing.module, waar de component zit.
const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

//hier wordt de router gebruikt en luistert naar alle browser locaties
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//de RouterModule is beschikbaar door de hele app, door de 'export'
export class AppRoutingModule { }