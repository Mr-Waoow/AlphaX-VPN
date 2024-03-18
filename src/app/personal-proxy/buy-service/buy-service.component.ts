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
    this.isCitySelected = false;
    this.isCountButtonClicked = false;
    this.methods.selected.removeClass(this.citiesBtnElementRef, 0, 'selected');
    this.countInputValue = 1;
    this.countryProxy = this.countriesProxy[i];
    this.costPerDay = this.totalCost / 30;
    if (this.radioMonthInputElement.nativeElement.checked) {
      this.totalCost =
        (this.countryProxy?.pricePrivate[0] ?? 0) * this.countInputValue;
    } else if (this.radioHalfyearInputElement.nativeElement.checked) {
      this.totalCost =
        (this.countryProxy?.pricePrivate[1] ?? 0) * this.countInputValue;
    } else if (this.radioYearInputElement.nativeElement.checked) {
      this.totalCost =
        (this.countryProxy?.pricePrivate[2] ?? 0) * this.countInputValue;
    }
    this.methods.selected.selectedBtn(evt, this.countriesBtnElementRef);
  }
  selectedCity(evt: Event, i: number): void {
    this.isCitySelected = true;
    this.countInputValue = 1;
    this.cityNo = i;
    this.methods.selected.selectedBtn(evt, this.citiesBtnElementRef);
    if (this.cityNo === -1) {
      this.countInputElement.nativeElement.max =
        this.countryProxy?.ipAvailiblePrivate.toString() ?? '0';
    } else {
      this.countInputElement.nativeElement.max =
        this.countryProxy?.ipAvailiblePrivateCities[this.cityNo].toString() ??
        '0';
    }
  }
  selectedPeriod(evt: Event): void {
    this.isPeriodSelected = true;
    const element = evt.currentTarget as HTMLInputElement;
    const value = element.value;
    switch (value) {
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
  }
  //count
  plusCount(): void {
    this.isCountButtonClicked = true;
    if (
      parseInt(this.countInputElement.nativeElement.max) >
        this.countInputValue &&
      this.isCitySelected &&
      this.isPeriodSelected
    ) {
      this.countInputValue = this.countInputValue + 1;
    }
    if (this.radioMonthInputElement.nativeElement.checked) {
      this.totalCost =
        (this.countryProxy?.pricePrivate[0] ?? 0) * this.countInputValue;
        this.costPerDay = this.totalCost / 30;
    } else if (this.radioHalfyearInputElement.nativeElement.checked) {
      this.totalCost =
        (this.countryProxy?.pricePrivate[1] ?? 0) * this.countInputValue;
        this.costPerDay = this.totalCost / 180;
    } else if (this.radioYearInputElement.nativeElement.checked) {
      this.totalCost =
        (this.countryProxy?.pricePrivate[2] ?? 0) * this.countInputValue;
        this.costPerDay = this.totalCost / 365;
    }
  }
  minusCount(): void {
    this.isCountButtonClicked = true;
    if (
      parseInt(this.countInputElement.nativeElement.min) <
        this.countInputValue &&
      this.isCitySelected &&
      this.isPeriodSelected
    ) {
      this.countInputValue = this.countInputValue - 1;
    }
    if (this.radioMonthInputElement.nativeElement.checked) {
      this.totalCost =
        (this.countryProxy?.pricePrivate[0] ?? 0) * this.countInputValue;
        this.costPerDay = this.totalCost / 30;
    } else if (this.radioHalfyearInputElement.nativeElement.checked) {
      this.totalCost =
        (this.countryProxy?.pricePrivate[1] ?? 0) * this.countInputValue;
        this.costPerDay = this.totalCost / 180;
    } else if (this.radioYearInputElement.nativeElement.checked) {
      this.totalCost =
        (this.countryProxy?.pricePrivate[2] ?? 0) * this.countInputValue;
        this.costPerDay = this.totalCost / 365;
    }
  }
}
