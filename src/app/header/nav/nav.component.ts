import { Component, HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'xvpn-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  faCaretDown = faCaretDown;
  sticky: boolean = false;
  displayScrollTop: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const headerNavbar = document.querySelector('.navbar-area') as HTMLElement;
    const backToTop = document.querySelector('.scroll-top') as HTMLElement;

    const sticky = headerNavbar.offsetTop;

    this.sticky = window.pageYOffset > sticky;
    this.displayScrollTop =
      document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;

    if (this.displayScrollTop) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  }
}
