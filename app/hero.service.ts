import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './classes/hero';

@Injectable()
export class HeroService{
  getHeroes(){
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(){
    return new Promise<Hero[]>((res,rej)=>
      setTimeout(()=>res(HEROES), 2000));
  }
}
