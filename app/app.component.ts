import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './hero-detail.component';
import {Hero} from './classes/hero';
import {HeroService} from './hero.service';


@Component({
    selector: 'my-app',
    templateUrl: '/partials/app.component.html',
    styleUrls:['partials/app.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]

})
export class AppComp implements OnInit {

  title = 'Tour of Heroes';
  selectedHero : Hero;
  public heroes : Hero[]

  constructor(private _heroService : HeroService){}

  getHeroes(){
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(){
    this.getHeroes();
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
}
