import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HeroesComponent } from './heroes/heroes.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes')

    return of(HEROES);
    // return HttpClient.get<Hero[]>() 
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched hero id = ${id}')

    return of(HEROES.find(hero => hero.id === id));
  }
}
