import { Component } from '@angular/core';
import { faFacebook, faLinkedinIn, faTelegram, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'xvpn-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faXTwitter = faXTwitter;
  faLinkedinIn = faLinkedinIn;
  faTiktok = faTiktok;
  faTelegram = faTelegram;
}
