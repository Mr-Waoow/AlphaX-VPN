import { Component, OnInit } from '@angular/core';
import { SharedPrice } from '../shared/interfaces/shared-price';
import { Methods } from '../shared/classes/methods';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../shared/services/data.service';
import { Country } from '../shared/interfaces/country';
import { ProxyChecker } from '../shared/interfaces/proxy-checker';
import { OperatingSystem } from '../shared/interfaces/operating-system';
import { faApple, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons';
import { Feature } from '../shared/interfaces/feature';

@Component({
  selector: 'xvpn-shared-proxy',
  templateUrl: './shared-proxy.component.html',
  styleUrl: './shared-proxy.component.css',
})
export class SharedProxyComponent implements OnInit {
  //Methods
  methods = new Methods();
  sharedPrices: SharedPrice[] = [];
  //Icons
  faCaretDown = faCaretDown;
  faSearch = faSearch;
  faWindows = faWindows;
  faLinux = faLinux;
  faApple = faApple;
  //Data
  countries: Country[] = [];
  proxyCheckers: ProxyChecker[] = [];
  operatingSystems: OperatingSystem[] = [];
  freeProxies: Feature[] = [];
  private _filteredCountries: Country[] = [];
  get filteredCountries(): Country[] {
    return this._filteredCountries;
  }
  set filteredCountries(value: Country[]) {
    this._filteredCountries = value;
  }
  private _filteredCountriesValue = '';
  get filteredCountriesValue(): string {
    return this._filteredCountriesValue;
  }
  set filteredCountriesValue(value: string) {
    this._filteredCountriesValue = value;
    this.filteredCountries = this.methods.filter.filterCountries(
      this.countries,
      this.filteredCountriesValue
    );
  }
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.sharedPrices = this.dataService.getSharedPrices();
    this.countries = this.dataService.getCountries();
    this.filteredCountries = this.countries;
    this.operatingSystems = this.dataService.getOperatingSystems();
    this.proxyCheckers = this.dataService.getProxiesCheckers();
    this.freeProxies = this.dataService.getFreeProxies();
  }
  openDivTarget(evt: Event, id: string): void {
    this.methods.openable.openDivTarget(evt, id);
  }
  searchCountries(): void {}
}
