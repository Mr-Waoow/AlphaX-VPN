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
  notMobile:boolean = false;
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

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.personalPrices = this.dataService.getPersonalPrices();
    this.countries = this.dataService.getCountriesProxy();
    this.individualRequests = this.dataService.getIndividualRequests();
    this.proxiesProps = this.dataService.getProxiesProps();
    this.personalQuestions = this.dataService.getPersonalQuestions();
    this.messengerApps = this.dataService.getMessengerApps();
  }
  openDiv(evt: Event): void {
    this.methods.openable.openDiv(evt);
  }
}
