import {Component, Input} from 'angular2/core';
import {Hero} from './classes/hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: '/partials/hero-detail.component.html'
})
export class HeroDetailComponent{
  @Input()
  hero : Hero;
  constructor(private _heroService : HeroService){
    
  }
}
