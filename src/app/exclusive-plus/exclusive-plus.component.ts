import { Component } from '@angular/core';

@Component({
  selector: 'xvpn-exclusive-plus',
  templateUrl: './exclusive-plus.component.html',
  styleUrl: './exclusive-plus.component.css',
})
export class ExclusivePlusComponent {
  intiated: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.intiated = true;
    }, 200);
  }
}
