import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'xvpn-header-slider',
  templateUrl: './header-slider.component.html',
  styleUrl: './header-slider.component.css',
})
export class HeaderSliderComponent implements OnInit {
  constructor(private wowService: NgwWowService) {}

  ngOnInit() {
    this.wowService.init();
  }
}
