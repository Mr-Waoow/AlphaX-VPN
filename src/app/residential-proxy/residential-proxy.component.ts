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
  intiated: boolean = false;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getCountriesProxy().subscribe({
      next: (data: CountryProxy[]) => {
        this.allCountries = data;
      },
      error: (error) => console.error('Error fetching countries data', error),
    });
    this.countries = this.allCountries.filter((country) => {
      return country.isMobile;
    }); //get countries from data service
    this.dataService.getMessengerApps().subscribe({
      next: (data: MajorServices[]) => {
        this.messengerApps = data;
      },
      error: (error) =>
        console.error('Error fetching messenger apps data', error),
    });
    this.dataService.getResidentialFeatures().subscribe({
      next: (data: Feature[]) => {
        this.residentialFeatures = data;
      },
      error: (error) =>
        console.error('Error fetching residential features data', error),
    });
    this.dataService.getUniversalProxyLists().subscribe({
      next: (data: Feature[]) => {
        this.universalProxyLists = data;
      },
      error: (error) =>
        console.error('Error fetching universal proxy lists data', error),
    });
    this.dataService.getFrequentlyAskesResidential().subscribe({
      next: (data: PersonalQuestion[]) => {
        this.frequentlyAskes = data;
      },
      error: (error) =>
        console.error('Error fetching frequently asked questions data', error),
    });
  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.intiated = true;
    }, 200);
  }
  openDiv(evt: Event): void {
    this.methods.openable.openDiv(evt);
  }
}
