import {Component, Input} from 'angular2/core';
import {Hero} from './classes/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: '/partials/hero-detail.component.html'
})
export class HeroDetailComponent{
  @Input()
  hero : Hero;
}
