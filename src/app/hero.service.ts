import { Injectable } from '@angular/core';
import { Hero } from './hero';
//mock-heroes uitgecommentarieerd, wordt overgenomen door de in-memory-data.service
//import { HEROES } from './mock-heroes'; 
import { Observable, of } from 'rxjs';
//de heroservice gaat gebruik maken van de message service door DI in de constructor
import { MessageService } from './message.service';
//hierdoor kun je http zaken gebruiken
import { HttpClient, HttpHeaders } from '@angular/common/http';
//error handling operators van rxjs
import { catchError, map, tap } from 'rxjs/operators';

// at injectable geeft aan dat dependency injectie uitgevoerd kan worden
//decorator injectable
@Injectable({
  //toegankelijk voor iedere component vanuit de root injector als een single, shared instance
  providedIn: 'root'
  
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        catchError(this.handleError<Hero[]>('getHeroes', []))
      );
  }
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /** POST: add a new hero to the server */
  addHero (hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

//heroes web api verwacht een httpheader, die wordt in de httpoptions meegegeven
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
/**
 * Handle Http operation that failed. generieke error handler
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}



  //methode die de heroes ophaalt van mock-heroes
  //om de Http na te bootsen, een observable van gemaakt, waarop de heroes.component.ts een subscibe heeft om het asynchroon te maken
  //ik vind moeilijk om callback te begrijpen
  // getHeroes(): Observable<Hero[]> {
    //als de functie getHeroes wordt uitgevoerd, wordt eerst een bericht toegevoegd aan de messageService
    //this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }


// //drie === om gelijk aan en ook dat type gelijk aan elkaar is
//   getHero(id:number):Observable<Hero>{
//     //this.messageService.add(`HeroService: fetched hero id=${id}`);
//     return of(HEROES.find(hero=>hero.id===id))
//   }
//singleton messageservice geplaatst in de constructor, nu kan heroservice gebruik maken van de messageservice
//private property http nu bruikbaar
  constructor(private messageService: MessageService, public http: HttpClient) { }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

//`HeroService: fetched hero id=${id}`.... backticks en dollarteken, zegt mij nog niet veel, ik ken geen javascript