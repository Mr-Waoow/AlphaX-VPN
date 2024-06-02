import { Component, OnInit } from '@angular/core';
import { MajorServices } from '../shared/interfaces/major-services';
import { DataService } from '../shared/services/data.service';
import { CountryProxy } from '../shared/interfaces/country-proxy';

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
  majorServices: MajorServices[] = [];
  allCountries:CountryProxy[] = [];
  countries:CountryProxy[] = [];
  messengerApps: MajorServices[] = [ ];
  constructor(private data:DataService) {}
  ngOnInit(): void {
    this.majorServices = this.data.getMajorServices();
    this.allCountries = this.data.getCountriesProxy();
    this.countries = this.allCountries.filter((country) => {
      return country.isMobile;
    }); //get countries from data service
    this.messengerApps = this.data.getMessengerApps();
  }
}
