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
    this.dataService.getMajorServices().subscribe({
     next:(data: MajorServices[]) => {
       this.majorServices = data;
     },
      error:(error) => console.error('Error fetching major services data', error),
    });
    this.dataService.getCountriesProxy().subscribe({
      next:(data: CountryProxy[]) => {
        this.allCountries = data;
      },
      error:(error) => console.error('Error fetching countries data', error),
    });
    this.countries = this.allCountries.filter((country) => {
      return country.isMobile;
    }); //get countries from data service
    this.dataService.getMessengerApps().subscribe({
      next:(data: MajorServices[]) => {
        this.messengerApps = data;
      },
      error:(error) => console.error('Error fetching messenger apps data', error),
    });
    this.dataService.getPrivateRentFeatures().subscribe({
      next:(data: Feature[]) => {
        this.privateRentFeatures = data;
      },
      error:(error) => console.error('Error fetching private rent features data', error),
    });
    this.dataService.getMobileProxiesProps().subscribe({
      next:(data: Feature[]) => {
        this.mobileProxiesProps = data;
      },
      error:(error) => console.error('Error fetching mobile proxies props data', error),
    });
    this.dataService.getFrequentlyAskes().subscribe({
      next:(data: PersonalQuestion[]) => {
        this.frequentlyAskes = data;
      },
      error:(error) => console.error('Error fetching frequently askes data', error),
    });
  }
  openDiv(evt: Event): void {
    this.methods.openable.openDiv(evt);
  }
}
