import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Methods } from '../../shared/classes/methods';
import { CountryProxy } from './interfaces/country-proxy';
import { CountriesProxyService } from './services/countries-proxy.service';
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'xvpn-buy-service',
  templateUrl: './buy-service.component.html',
  styleUrl: './buy-service.component.css',
})
export class BuyServiceComponent implements OnInit {
  @ViewChild('title')
  titleElementRef!: ElementRef;
  @ViewChild('price')
  priceElementRef!: ElementRef;
  @ViewChild('btnShared')
  btnSharedElementRef!: ElementRef;
  @ViewChild('btnPrivate')
  btnprivateElementRef!: ElementRef;
  @ViewChildren('countriesBtn')
  countriesBtnElementRef!: QueryList<ElementRef>;
  @ViewChildren('citiesBtn')
  citiesBtnElementRef!: QueryList<ElementRef>;

  //InputElement
  @ViewChild('radioMonth')
  radioMonthInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('radioHalfyear')
  radioHalfyearInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('radioYear') radioYearInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('countInput') countInputElement!: ElementRef<HTMLInputElement>;

  //Icons
  faUser = faUser;
  faUserGroup = faUserGroup;
  //Variables
  countriesProxy: CountryProxy[] = [];
  countryProxy: CountryProxy | undefined;
  cityNo = -1;
  totalCost = 0;
  costPerDay = 0;
  methods: Methods = new Methods();
  isPrivate = true;
  privateCountriesNumber = 0;
  sharedCountriesNumber = 0;

  constructor(private countriesProxyService: CountriesProxyService) {}

  ngOnInit(): void {
    this.countriesProxy = this.countriesProxyService.getCountriesProxy();
    this.countryProxy = this.countriesProxy[0];
    this.privateCountriesNumber = this.countriesProxy.filter(
      (country) => country.isPrivate
    ).length;
    this.sharedCountriesNumber = this.countriesProxy.filter(
      (country) => country.isShared
    ).length;
  }

  //Methods
  //ShowHide
  showPrivate(evt: Event): void {
    this.isPrivate = true;
    this.methods.showHide.showPrivate(
      evt,
      0,
      this.titleElementRef,
      this.btnSharedElementRef,
      this.countriesBtnElementRef
    );
  }
  showShared(evt: Event): void {
    this.isPrivate = false;
    this.methods.showHide.showShared(
      evt,
      0,
      this.titleElementRef,
      this.btnprivateElementRef,
      this.countriesBtnElementRef
    );
  }
  //Selected
  selectedCountry(evt: Event, i: number): void {
    this.countryProxy = this.countriesProxy[i];
    this.costPerDay = this.totalCost / 30;
    if (this.radioMonthInputElement.nativeElement.checked) {
      this.totalCost = this.countryProxy?.pricePrivate[0] ?? 0;
    } else if (this.radioHalfyearInputElement.nativeElement.checked) {
      this.totalCost = this.countryProxy?.pricePrivate[1] ?? 0;
    } else if (this.radioYearInputElement.nativeElement.checked) {
      this.totalCost = this.countryProxy?.pricePrivate[2] ?? 0;
    }
    this.methods.selected.selectedBtn(evt, this.countriesBtnElementRef);
  }
  selectedCity(evt: Event, i: number): void {
    this.cityNo = i;
    this.methods.selected.selectedBtn(evt, this.citiesBtnElementRef);
  }
  selectedPeriod(evt: Event): void {
    const element = evt.currentTarget as HTMLInputElement;
    const value = element.value;
    switch (value) {
      case 'month':
        this.totalCost = this.countryProxy?.pricePrivate[0] ?? 0;
        this.costPerDay = this.totalCost / 30;
        break;
      case 'halfyear':
        this.totalCost = this.countryProxy?.pricePrivate[1] ?? 0;
        this.costPerDay = this.totalCost / 180;
        break;
      case 'year':
        this.totalCost = this.countryProxy?.pricePrivate[2] ?? 0;
        this.costPerDay = this.totalCost / 365;
        break;
      default:
        this.totalCost = this.countryProxy?.pricePrivate[0] ?? 0;
        this.costPerDay = this.totalCost / 30;
    }
  }
  //count
  plusCount(): void {
    this.countInputElement.nativeElement.value = (
      parseInt(this.countInputElement.nativeElement.value) + 1
    ).toString();
  }
  minusCount(): void {
    this.countInputElement.nativeElement.value = (
      parseInt(this.countInputElement.nativeElement.value) - 1
    ).toString();
  }
}
