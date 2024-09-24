import { Component } from '@angular/core';

@Component({
  selector: 'xvpn-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  intiated: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.intiated = true;
    }, 200);
  }
}
