import { Component } from '@angular/core';
import { OPACITY_CONTAIN } from './shared/animations/opacity';
import { LIST_ANIMATION } from './shared/animations/animation'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [LIST_ANIMATION]
})
export class AppComponent {
  state = 'hide';
  title = 'animation-demo';
  onChange(value) {
    console.log(value);
    this.state = value;
  }
}
