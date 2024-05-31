import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xvpn-mobile-proxy',
  templateUrl: './mobile-proxy.component.html',
  styleUrl: './mobile-proxy.component.css',
})
export class MobileProxyComponent implements OnInit{
  title: string = 'Buy Mobile Proxies';
  isMobile: boolean = true;
  unlimitedFeatures: string[] = [
    '29 countries',
    '56 cities,',
    '56 operators',
    '1 000 000+ IP',
  ];
  ngOnInit(): void {

  }
}
