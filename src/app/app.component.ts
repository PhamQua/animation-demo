import { Component } from '@angular/core';
import { OPACITY_ANIMATION } from './shared/animations/opacity';
import { LIST_ANIMATION } from './shared/animations/animation'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [LIST_ANIMATION, OPACITY_ANIMATION]
})
export class AppComponent {
  stateList = 'hide';
  stateOpacity = 'hide';
  title = 'animation-demo';
  onChange(value) {
    this.stateList = value;
  }
  onChangeOpacity(value) {
    this.stateOpacity = value;
  }
}
