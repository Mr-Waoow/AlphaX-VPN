import { Component } from '@angular/core';
import { fadeInDown } from 'ng-animate';
import { TextAnimation } from 'ngx-teximate';

@Component({
  selector: 'xvpn-header-slider',
  templateUrl: './header-slider.component.html',
  styleUrl: './header-slider.component.css',
})
export class HeaderSliderComponent {
  text = 'Lorem ipsum dolor sit amet.';

  enterAnimation: TextAnimation = {
    animation: fadeInDown,
    delay: 50,
    type: 'letter',
  };
}
