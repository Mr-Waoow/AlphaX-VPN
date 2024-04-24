import { Component, OnInit } from '@angular/core';
import { PersonalPrice } from './interfaces/personal-price';
import { PersonalPricesService } from './services/personal-prices.service';
import { IndividualRequest } from './interfaces/individual-request';
import { CountryProxy } from './buy-service/interfaces/country-proxy';
import { CountriesProxyService } from './buy-service/services/countries-proxy.service';
import { IndividualRequestsService } from './services/individual-requests.service';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { ProxyProps } from './interfaces/proxy-props';
import { ProxiesPropsService } from './services/proxies-props.service';
import { PersonalQuestion } from './interfaces/personal-question';
import { PersonalQuestionsService } from './services/personal-questions.service';
import { Methods } from '../shared/classes/methods';

@Component({
  selector: 'xvpn-personal-proxy',
  templateUrl: './personal-proxy.component.html',
  styleUrl: './personal-proxy.component.css',
})
export class PersonalProxyComponent implements OnInit {
  //Icons
  faCaretDown = faCaretDown;
  //Data
  personalPrices: PersonalPrice[] = [];
  individualRequests: IndividualRequest[] = [];
  countries: CountryProxy[] = [];
  proxiesProps: ProxyProps[] = [];
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
    private personalPricesServices: PersonalPricesService,
    private countriesProxyService: CountriesProxyService,
    private individualRequestsService: IndividualRequestsService,
    private proxiesPropsService: ProxiesPropsService,
    private personalQuestionsService: PersonalQuestionsService
  ) {}
  ngOnInit(): void {
    this.personalPrices = this.personalPricesServices.getPersonalPrices();
    this.countries = this.countriesProxyService.getCountriesProxy();
    this.individualRequests =
      this.individualRequestsService.getIndividualRequests();
    this.proxiesProps = this.proxiesPropsService.getProxiesProps();
    this.personalQuestions =
      this.personalQuestionsService.getPersonalQuestions();
  }
  openDiv(evt: Event): void {
    this.methods.openable.openDiv(evt);
  }
}
