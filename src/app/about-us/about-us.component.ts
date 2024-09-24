import { Component } from '@angular/core';

@Component({
  selector: 'xvpn-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  intiated: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.intiated = true;
    }, 200);
  }
}
