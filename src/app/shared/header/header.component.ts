import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import {
  faFacebook,
  faLinkedinIn,
  faTelegram,
  faTiktok,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCaretDown,
  faMailBulk,
  faPhone,
  faBars,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import { Methods } from '../classes/methods';
import { OfferedService } from '../interfaces/offered-service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'xvpn-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.min.css',
})
export class HeaderComponent implements OnInit {
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faXTwitter = faXTwitter;
  faLinkedinIn = faLinkedinIn;
  faTiktok = faTiktok;
  faTelegram = faTelegram;
  faCaretDown = faCaretDown;
  faBars = faBars;
  faX = faX;
  @ViewChild('headerNavbar') headerNavbar: ElementRef | undefined;
  //Methods
  methods = new Methods();
  isSticky: boolean = false;
  isInlist: boolean = false;
  isDropDown: boolean = false;
  stickyPosition = 0; // Stores the sticky position
  offeredServices: OfferedService[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.offeredServices = this.dataService.getOfferedService();
  }
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
  toggleDropDown(id: string): void {
    if (!this.isDropDown) this.openDropDown(id);
    else this.closeDropDown(id);
  }
  outList(id: string): void {
    setTimeout(() => {
      if (!this.isInlist) {
        this.closeDropDown(id);
      }
    }, 500);
  }
  inList(): void {
    this.isInlist = true;
  }
  openDropDown(id: string): void {
    this.isDropDown = true;
    this.methods.openable.openDropDown(id);
  }
  closeDropDown(id: string): void {
    this.isInlist = false;
    this.isDropDown = false;
    this.methods.openable.closeDropDown(id);
  }
}
