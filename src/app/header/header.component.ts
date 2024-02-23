import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  @ViewChild('headerNavbar') headerNavbar: ElementRef | undefined;

  isSticky = false;
  stickyPosition = 0; // Stores the sticky position

  ngAfterViewInit() {
    if (this.headerNavbar) {
      this.stickyPosition = this.headerNavbar.nativeElement.offsetTop;
      // You can also call your onWindowScroll function here if necessary
    } else {
      console.warn('headerNavbar element not found.');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.headerNavbar) {
      const scrollY = window.pageYOffset;

      // Calculate and store sticky position once for efficiency
      if (!this.stickyPosition) {
        this.stickyPosition = this.headerNavbar.nativeElement.offsetTop;
      }

      this.isSticky = scrollY > this.stickyPosition;

      if (this.headerNavbar.nativeElement) {
        this.headerNavbar.nativeElement.classList.toggle(
          'sticky',
          this.isSticky
        );
      }
    }
  }
}
