import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
//ActivatedRoute bevat informatie van de route van de instantie, we willen graag de id weten
import { ActivatedRoute } from '@angular/router';
//location kan interactie aan met de browser
import { Location } from '@angular/common';
//service levert data van heroes
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
// at input zorgt ervoor dat het input ontvangt van een parent-component
export class HeroDetailComponent implements OnInit {
  @Input() hero:Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  //nadat component wordt gemaakt en constructor alles heeft ingeladen, gaat ngOnit aan de slag
  //en voert functie getHero uit
  ngOnInit(): void {
    this.getHero();
  }
  //hier gaat getHero af
  getHero(): void {
    //hier wordt de id uit de route gehaald, + teken is een javascript-ding om van string een number te maken
    const id = +this.route.snapshot.paramMap.get('id');
    //getHero(id) methode bestaat nog niet, in heroService implementeren
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  save():void{
    this.heroService.updateHero(this.hero)
     .subscribe(() => this.goBack());
  }
  
//een goBack-functie die terug gaat naar de url, waar je vandaan komt. dit zit in de location service opgeslagen
  goBack():void{
    this.location.back();
  }
}
