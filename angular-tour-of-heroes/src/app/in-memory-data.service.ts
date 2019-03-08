import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: "Batman" },
      { id: 12, name: "Superman" },
      { id: 13, name: "Martian" },
      { id: 14, name: "Hawk Girl" },
      { id: 15, name: "Wonder Woman" },
      { id: 16, name: "Green Lantern" },
      { id: 17, name: "Shazam" },
      { id: 18, name: "Aquaman" },
      { id: 19, name: "Lex Luthor" },
      { id: 20, name: "Dark Side" }
    ];

    return {heroes};
  }

  constructor() { }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
