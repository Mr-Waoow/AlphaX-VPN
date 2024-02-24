import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'xvpn-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrl: './scroll-top.component.css',
})
export class ScrollTopComponent {
  faArrowUp = faArrowUp;
  @ViewChild('backToTop')
  backToTop!: ElementRef;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.backToTop) {
      const scrollY = window.pageYOffset;

      // Show or hide the button based on scroll position (optional)
      this.backToTop.nativeElement.style.display =
        scrollY > 50 ? 'flex' : 'none';
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
