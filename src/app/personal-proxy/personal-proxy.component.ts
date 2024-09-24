import { Component, OnInit } from '@angular/core';
import { PersonalPrice } from '../shared/interfaces/personal-price';
import { CountryProxy } from '../shared/interfaces/country-proxy';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { PersonalQuestion } from '../shared/interfaces/personal-question';
import { Methods } from '../shared/classes/methods';
import { DataService } from '../shared/services/data.service';
import { Feature } from '../shared/interfaces/feature';
import { MajorServices } from '../shared/interfaces/major-services';

@Component({
  selector: 'xvpn-personal-proxy',
  templateUrl: './personal-proxy.component.html',
  styleUrl: './personal-proxy.component.css',
})
export class PersonalProxyComponent implements OnInit {
  title: string = 'Buy Personal Proxy';
  notMobile: boolean = false;
  //Icons
  faCaretDown = faCaretDown;
  //Data
  personalPrices: PersonalPrice[] = [];
  individualRequests: MajorServices[] = [];
  countries: CountryProxy[] = [];
  proxiesProps: Feature[] = [];
  personalQuestions: PersonalQuestion[] = [];
  messengerApps: MajorServices[] = [];
  //Methods
  methods = new Methods();
  intiated: boolean = false;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getPersonalPrices().subscribe({
      next: (data: PersonalPrice[]) => {
        this.personalPrices = data;
      },
      error: (error) =>
        console.error('Error fetching personal prices data', error),
    });
    this.dataService.getCountriesProxy().subscribe({
      next: (data: CountryProxy[]) => {
        this.countries = data;
      },
      error: (error) => console.error('Error fetching countries data', error),
    });
    this.dataService.getIndividualRequests().subscribe({
      next: (data: MajorServices[]) => {
        this.individualRequests = data;
      },
      error: (error) =>
        console.error('Error fetching individual requests data', error),
    });
    this.dataService.getProxiesProps().subscribe({
      next: (data: Feature[]) => {
        this.proxiesProps = data;
      },
      error: (error) =>
        console.error('Error fetching proxies props data', error),
    });
    this.dataService.getPersonalQuestions().subscribe({
      next: (data: PersonalQuestion[]) => {
        this.personalQuestions = data;
      },
      error: (error) =>
        console.error('Error fetching personal questions data', error),
    });
    this.dataService.getMessengerApps().subscribe({
      next: (data: MajorServices[]) => {
        this.messengerApps = data;
      },
      error: (error) =>
        console.error('Error fetching messenger apps data', error),
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
