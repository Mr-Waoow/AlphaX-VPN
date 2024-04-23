import { Component, OnInit } from '@angular/core';
import { PersonalPrice } from './interfaces/personal-price';
import { PersonalPricesService } from './services/personal-prices.service';
import { IndividualRequest } from './interfaces/individual-request';
import { CountryProxy } from './buy-service/interfaces/country-proxy';
import { CountriesProxyService } from './buy-service/services/countries-proxy.service';
import { IndividualRequestsService } from './services/individual-requests.service';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

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



  constructor(
    private personalPricesServices: PersonalPricesService,
    private countriesProxyService: CountriesProxyService,
    private individualRequestsService: IndividualRequestsService
  ) {}
  ngOnInit(): void {
    this.personalPrices = this.personalPricesServices.getPersonalPrices();
    this.countries = this.countriesProxyService.getCountriesProxy();
    this.individualRequests =
      this.individualRequestsService.getIndividualRequests();
  }
}
