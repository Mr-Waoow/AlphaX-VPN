import { Component } from '@angular/core';

@Component({
  selector: 'xvpn-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent {
  intiated: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.intiated = true;
    }, 200);
  }
}
