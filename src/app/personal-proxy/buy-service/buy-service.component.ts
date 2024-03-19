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
  @ViewChild('radioWeek')
  radioWeekInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('radioMonth')
  radioMonthInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('radioHalfyear')
  radioHalfyearInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('radioYear') radioYearInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('countInputPrivate')
  countInputPrivateInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('countInputShared')
  countInputSharedInputElement!: ElementRef<HTMLInputElement>;

  //Icons
  faUser = faUser;
  faUserGroup = faUserGroup;
  //Variables
  //Booleans
  isCitySelected = false;
  isPeriodSelected = false;
  isCountButtonClicked = false;
  isPrivate = true;
  //Numbers
  cityNo = -1;
  totalCost = 0;
  costPerDay = 0;
  privateCountriesNumber = 0;
  sharedCountriesNumber = 0;
  countInputValue = 1;
  periodValue = 'month';
  //Objects
  countriesProxy: CountryProxy[] = [];
  countryProxy: CountryProxy | undefined;
  methods: Methods = new Methods();

  constructor(private countriesProxyService: CountriesProxyService) {}

  //Lifecycle Hooks
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
  ngOnChanges(): void {}

  //Methods
  //ShowHide
  showPrivate(evt: Event): void {
    this.methods.showHide.showPrivate(
      evt,
      0,
      this.btnSharedElementRef,
      this.countriesBtnElementRef
    );
    this.methods.selected.removeClass(
      this.countriesBtnElementRef,
      0,
      'selected'
    );
    this.isPrivate = true;
    this.resetValues(this.isPrivate);
  }
  showShared(evt: Event): void {
    this.methods.showHide.showShared(
      evt,
      0,
      this.btnprivateElementRef,
      this.countriesBtnElementRef
    );
    this.methods.selected.removeClass(
      this.countriesBtnElementRef,
      0,
      'selected'
    );
    this.isPrivate = false;
    this.resetValues(this.isPrivate);
  }
  //Selected
  selectedCountry(evt: Event, i: number): void {
    this.methods.selected.selectedBtn(evt, this.countriesBtnElementRef);
    this.methods.selected.removeClass(this.citiesBtnElementRef, 0, 'selected');
    this.resetValues(this.isPrivate);
    this.countryProxy = this.countriesProxy[i];
  }
  selectedCity(evt: Event, i: number): void {
    this.isCitySelected = true;
    this.countInputValue = 1;
    this.cityNo = i;
    this.methods.selected.selectedBtn(evt, this.citiesBtnElementRef);
    if (this.cityNo === -1) {
      this.countInputPrivateInputElement.nativeElement.max =
        this.countryProxy?.ipAvailiblePrivate.toString() ?? '0';
    } else {
      this.countInputPrivateInputElement.nativeElement.max =
        this.countryProxy?.ipAvailiblePrivateCities[this.cityNo].toString() ??
        '0';
    }
  }
  selectedPeriod(evt: Event): void {
    this.isPeriodSelected = true;
    const element = evt.currentTarget as HTMLInputElement;
    this.periodValue = element.value;
    this.calculateTotalCost(this.periodValue, this.isPrivate);
  }
  //count
  plusCount(): void {
    this.isCountButtonClicked = true;
    if (this.isPrivate) {
      if (
        parseInt(this.countInputPrivateInputElement.nativeElement.max) >
          this.countInputValue &&
        this.isCitySelected &&
        this.isPeriodSelected
      ) {
        this.countInputValue = this.countInputValue + 1;
        this.calculateTotalCost(this.periodValue, this.isPrivate);
      }
    } else {
      if (
        parseInt(this.countInputSharedInputElement.nativeElement.max) >
          this.countInputValue &&
        this.isPeriodSelected
      ) {
        this.countInputValue = this.countInputValue + 1;
        this.calculateTotalCost(this.periodValue, this.isPrivate);
      }
    }
  }
  minusCount(): void {
    this.isCountButtonClicked = true;
    if (this.isPrivate) {
      if (
        parseInt(this.countInputPrivateInputElement.nativeElement.min) <
          this.countInputValue &&
        this.isCitySelected &&
        this.isPeriodSelected
      ) {
        this.countInputValue = this.countInputValue - 1;
        this.calculateTotalCost(this.periodValue, this.isPrivate);
      }
    } else {
      if (
        parseInt(this.countInputSharedInputElement.nativeElement.min) <
          this.countInputValue &&
        this.isPeriodSelected
      ) {
        this.countInputValue = this.countInputValue - 1;
        this.calculateTotalCost(this.periodValue, this.isPrivate);
      }
    }
  }
  //Calculate
  calculateTotalCost(periodValue: string, isPrivate: boolean): void {
    if (isPrivate) {
      switch (periodValue) {
        case 'month':
          this.totalCost =
            (this.countryProxy?.pricePrivate[0] ?? 0) * this.countInputValue;
          this.costPerDay = this.totalCost / 30;
          break;
        case 'halfyear':
          this.totalCost =
            (this.countryProxy?.pricePrivate[1] ?? 0) * this.countInputValue;
          this.costPerDay = this.totalCost / 180;
          break;
        case 'year':
          this.totalCost =
            (this.countryProxy?.pricePrivate[2] ?? 0) * this.countInputValue;
          this.costPerDay = this.totalCost / 365;
          break;
        default:
          this.totalCost =
            (this.countryProxy?.pricePrivate[0] ?? 0) * this.countInputValue;
          this.costPerDay = this.totalCost / 30;
      }
    } else {
      switch (periodValue) {
        case 'week':
          this.totalCost =
            (this.countryProxy?.priceShared[0] ?? 0) * this.countInputValue;
          this.costPerDay = this.totalCost / 7;
          break;
        case 'month':
          this.totalCost =
            (this.countryProxy?.priceShared[1] ?? 0) * this.countInputValue;
          this.costPerDay = this.totalCost / 30;
          break;
        case 'halfyear':
          this.totalCost =
            (this.countryProxy?.priceShared[2] ?? 0) * this.countInputValue;
          this.costPerDay = this.totalCost / 180;
          break;
        default:
          this.totalCost =
            (this.countryProxy?.priceShared[0] ?? 0) * this.countInputValue;
          this.costPerDay = this.totalCost / 7;
      }
    }
  }
  //reset
  resetValues(isPrivate: boolean): void {
    this.countryProxy = this.countriesProxy[0];
    this.radioWeekInputElement.nativeElement.checked = false;
    this.radioMonthInputElement.nativeElement.checked = false;
    this.radioHalfyearInputElement.nativeElement.checked = false;
    this.radioYearInputElement.nativeElement.checked = false;
    this.isPeriodSelected = false;
    this.isCountButtonClicked = false;
    this.isCitySelected = false;
    this.countInputValue = 1;
    this.totalCost = 0;
    this.cityNo = -1;
    if (isPrivate) {
      this.periodValue = 'month';
      this.costPerDay = this.totalCost / 30;
    } else {
      this.periodValue = 'week';
      this.costPerDay = this.totalCost / 7;
    }
  }
}
