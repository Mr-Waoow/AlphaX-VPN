import { Component } from '@angular/core';
import { faFacebook, faLinkedinIn, faTelegram, faTiktok, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

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
  faCaretDown = faCaretDown;
  //Navbar menu
  sticky: boolean = false;
  displayScrollTop: boolean = false;

  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const headerNavbar = document.querySelector('.navbar-area') as HTMLElement;
  //   const backToTop = document.querySelector('.scroll-top') as HTMLElement;

  //   const sticky = headerNavbar.offsetTop;

  //   this.sticky = window.pageYOffset > sticky;
  //   this.displayScrollTop =
  //     document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;

  //   if (this.displayScrollTop) {
  //     backToTop.style.display = 'flex';
  //   } else {
  //     backToTop.style.display = 'none';
  //   }
  // }
}
