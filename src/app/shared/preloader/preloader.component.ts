import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'xvpn-preloader',
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css',
})
export class PreloaderComponent implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
  }

  fadeout() {
    const preloader = this.el.nativeElement.querySelector('.preloader');
    preloader.style.opacity = '0';
    preloader.style.display = 'none';
  }
}
