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
  //onSelect is niet meer nodig, is vervangen door routerLink in een a tag
  // onSelect(hero:Hero):void{
  //   this.selectedHero=hero;
  // }
//methode die in de ngOnInit wordt envoked, dat is nadat de constructor is geweest. 
//de heroes warray in heroservice worden opgehaald en in de property heroes gezet
  getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

//toevoegen van nieuwe hero, als naam leeg is, dan doet het niks
//anders laten uitvoeren van een heroservice addhero functie met meegegeven naam als object Hero. 
//dus alleen naam value, geen id
//dan wacht subscribe voor callback van heroservice??? en dan voegt hij een hero toe aan zijn eigen heroesarray in de property???
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  //delete methode, krijgt een hero met id mee uit html
  //haalt het eerst uit zijn eigen lijst met filter
  //dan door naar heroservice om daar een deletehero functie te laten uitvoeren
  //een observable verwacht de subscribe methode, als je deze weghaalt, dan haalt het gewoon
  //de hele lijst heroes op, deleteHero is niet uitgevoerd
  //echter, nu als je refreshed op localhost/.../heroes, haalt het ook weer alle heroes op. hero is niet uit de InMemoryDataService
  //!== betekent 'does not equal'

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}