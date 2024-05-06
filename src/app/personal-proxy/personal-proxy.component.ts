import { Component, OnInit } from '@angular/core';
import { PersonalPrice } from '../shared/interfaces/personal-price';
import { IndividualRequest } from '../shared/interfaces/individual-request';
import { CountryProxy } from '../shared/interfaces/country-proxy';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { PersonalQuestion } from '../shared/interfaces/personal-question';
import { Methods } from '../shared/classes/methods';
import { DataService } from '../shared/services/data.service';
import { Feature } from '../shared/interfaces/feature';

@Component({
  selector: 'xvpn-personal-proxy',
  templateUrl: './personal-proxy.component.html',
  styleUrl: './personal-proxy.component.min.css',
})
export class PersonalProxyComponent implements OnInit {
  //Icons
  faCaretDown = faCaretDown;
  //Data
  personalPrices: PersonalPrice[] = [];
  individualRequests: IndividualRequest[] = [];
  countries: CountryProxy[] = [];
  proxiesProps: Feature[] = [];
  personalQuestions: PersonalQuestion[] = [];
  messengerApps: { name: string; icon: string }[] = [
    { name: 'Massenger', icon: 'messenger' },
    { name: 'Telegram', icon: 'telegram' },
    { name: 'WhatsApp', icon: 'whatsapp' },
    { name: 'Viber', icon: 'viber' },
    { name: 'Skype', icon: 'skype' },
    { name: 'mail', icon: 'mail' },
  ];
  //Methods
  methods = new Methods();

  constructor(
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.personalPrices = this.dataService.getPersonalPrices();
    this.countries = this.dataService.getCountriesProxy();
    this.individualRequests = this.dataService.getIndividualRequests();
    this.proxiesProps = this.dataService.getProxiesProps();
    this.personalQuestions = this.dataService.getPersonalQuestions();
  }
  openDiv(evt: Event): void {
    this.methods.openable.openDiv(evt);
  }
}
