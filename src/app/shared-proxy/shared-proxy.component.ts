import { Component, OnInit } from '@angular/core';
import { SharedPrice } from '../shared/interfaces/shared-price';
import { Methods } from '../shared/classes/methods';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../shared/services/data.service';
import { Country } from '../shared/interfaces/country';
import { ProxyChecker } from '../shared/interfaces/proxy-checker';
import { OperatingSystem } from '../shared/interfaces/operating-system';
import {
  faApple,
  faLinux,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';
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
  intiated: boolean = false;
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
    this.dataService.getSharedPrices().subscribe({
      next: (data: SharedPrice[]) => (this.sharedPrices = data),
      error: (error) =>
        console.error('Error fetching shared prices data', error),
    });
    this.dataService.getCountries().subscribe({
      next: (data: Country[]) => {
        this.countries = data;
        this.filteredCountries = this.countries;
      },
      error: (error) => console.error('Error fetching countries data', error),
    });
    this.dataService.getOperatingSystems().subscribe({
      next: (data: OperatingSystem[]) => (this.operatingSystems = data),
      error: (error) =>
        console.error('Error fetching operating systems data', error),
    });
    this.dataService.getProxiesCheckers().subscribe({
      next: (data: ProxyChecker[]) => (this.proxyCheckers = data),
      error: (error) =>
        console.error('Error fetching proxy checkers data', error),
    });
    this.dataService.getFreeProxies().subscribe({
      next: (data: Feature[]) => (this.freeProxies = data),
      error: (error) =>
        console.error('Error fetching free proxies data', error),
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.intiated = true;
    }, 200);
  }

  openDivTarget(evt: Event, id: string): void {
    this.methods.openable.openDivTarget(evt, id);
  }
  searchCountries(): void {}
}
