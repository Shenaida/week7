//aangemaakt met ng generate component heroes
import { Component, OnInit } from '@angular/core';
//importeren van een class hero
import { Hero } from '../hero';
//importeer een array van Hero als een const
//deze kan weg als er een service beschikbaar is om de array van heroes te leveren
//import { HEROES } from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  //component's template file
  templateUrl: './heroes.component.html',
  //private CSS styles
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //property, tevens strong type
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  //heroes is nu een array van Hero
  heroes: Hero[];
  selectedHero:Hero;
//dependency injection via constructor, dit is de verkorte versie voor het binden aan een private property
//Heroservice is een singleton instance
  constructor(private heroService: HeroService) { }
//noOnInit is een methode om initialisatie logica toe te passen, omdat het nadat de component gemaakt is, deze methode uitvoert.
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }
//methode die in de ngOnInit wordt envoked, dat is nadat de constructor is geweest. 
//de heroes warray in heroservice worden opgehaald en in de property heroes gezet
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

}