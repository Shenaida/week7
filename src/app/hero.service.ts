import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
//de heroservice gaat gebruik maken van de message service door DI in de constructor
import { MessageService } from './message.service';

// at injectable geeft aan dat dependency injectie uitgevoerd kan worden
//decorator injectable
@Injectable({
  //toegankelijk voor iedere component vanuit de root injector als een single, shared instance
  providedIn: 'root'
})
export class HeroService {
  //methode die de heroes ophaalt van mock-heroes
  //om de Http na te bootsen, een observable van gemaakt, waarop de heroes.component.ts een subscibe heeft om het asynchroon te maken
  //ik vind moeilijk om callback te begrijpen
  getHeroes(): Observable<Hero[]> {
    //als de functie getHeroes wordt uitgevoerd, wordt eerst een bericht toegevoegd aan de messageService
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
//singleton messageservice geplaatst in de constructor, nu kan heroservice gebruik maken van de messageservice
  constructor(private messageService: MessageService) { }
}
