import { Component } from '@angular/core';
import { CountryProxy } from '../shared/interfaces/country-proxy';
import { Feature } from '../shared/interfaces/feature';
import { MajorServices } from '../shared/interfaces/major-services';
import { PersonalQuestion } from '../shared/interfaces/personal-question';
import { DataService } from '../shared/services/data.service';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Methods } from '../shared/classes/methods';

@Component({
  selector: 'xvpn-residential-proxy',
  templateUrl: './residential-proxy.component.html',
  styleUrl: './residential-proxy.component.css',
})
export class ResidentialProxyComponent {
  //Icons
  faCaretDown = faCaretDown;
  title: string = 'Residential proxies plans';
  isMobile: boolean = true;
  methods = new Methods();
  allCountries: CountryProxy[] = [];
  countries: CountryProxy[] = [];
  messengerApps: MajorServices[] = [];
  residentialFeatures: Feature[] = [];
  universalProxyLists: Feature[] = [];
  frequentlyAskes: PersonalQuestion[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.allCountries = this.dataService.getCountriesProxy();
    this.countries = this.allCountries.filter((country) => {
      return country.isMobile;
    }); //get countries from data service
    this.messengerApps = this.dataService.getMessengerApps();
    this.residentialFeatures = this.dataService.getResidentialFeatures();
    this.universalProxyLists = this.dataService.getUniversalProxyLists();
    this.frequentlyAskes = this.dataService.getFrequentlyAskesResidential();
  }
  openDiv(evt: Event): void {
    this.methods.openable.openDiv(evt);
  }
}
