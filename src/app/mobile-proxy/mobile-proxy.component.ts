import { Component, OnInit } from '@angular/core';
import { MajorServices } from '../shared/interfaces/major-services';
import { DataService } from '../shared/services/data.service';
import { CountryProxy } from '../shared/interfaces/country-proxy';
import { Feature } from '../shared/interfaces/feature';
import { Methods } from '../shared/classes/methods';
import { PersonalQuestion } from '../shared/interfaces/personal-question';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'xvpn-mobile-proxy',
  templateUrl: './mobile-proxy.component.html',
  styleUrl: './mobile-proxy.component.css',
})
export class MobileProxyComponent implements OnInit{
  //Icons
  faCaretDown = faCaretDown;
  title: string = 'Buy Mobile Proxies';
  isMobile: boolean = true;
  methods = new Methods();
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
  privateRentFeatures: Feature[] = [];
  mobileProxiesProps: Feature[] = [];
  frequentlyAskes: PersonalQuestion[] = [];
  constructor(private dataService:DataService) {}
  ngOnInit(): void {
    this.majorServices = this.dataService.getMajorServices();
    this.allCountries = this.dataService.getCountriesProxy();
    this.countries = this.allCountries.filter((country) => {
      return country.isMobile;
    }); //get countries from data service
    this.messengerApps = this.dataService.getMessengerApps();
    this.privateRentFeatures = this.dataService.getPrivateRentFeatures();
    this.mobileProxiesProps = this.dataService.getMobileProxiesProps();
    this.frequentlyAskes = this.dataService.getFrequentlyAskes();
  }
  openDiv(evt: Event): void {
    this.methods.openable.openDiv(evt);
  }
}
