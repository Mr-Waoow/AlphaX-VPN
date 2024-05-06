import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Methods } from '../../shared/classes/methods';
import { CountryProxy } from '../../shared/interfaces/country-proxy';
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'xvpn-buy-service',
  templateUrl: './buy-service.component.html',
  styleUrl: './buy-service.component.min.css',
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
  @ViewChild('countInput')
  countInputElement!: ElementRef<HTMLInputElement>;

  @Input() compName: string = 'Buy Personal Proxy';
  //Icons
  faUser = faUser;
  faUserGroup = faUserGroup;
  //Variables
  //Booleans
  isCitySelected = false;
  isPeriodSelected = false;
  isCountButtonChanged = false;
  isPrivate = true;
  //Numbers
  cityNo = -1;
  totalCost = 0;
  costPerDay = 0;
  privateCountriesNumber = 0;
  sharedCountriesNumber = 0;
  periodValue = 'month';
  //Objects
  private countriesProxy: CountryProxy[] = [];
  private _filteredCountriesProxy: CountryProxy[] = [];
  get filteredCountriesProxy(): CountryProxy[] {
    return this._filteredCountriesProxy;
  }
  set filteredCountriesProxy(value: CountryProxy[]) {
    this._filteredCountriesProxy = value;
  }
  private _countryProxy: CountryProxy | undefined;
  get countryProxy(): CountryProxy | undefined {
    return this._countryProxy;
  }
  set countryProxy(value: CountryProxy | undefined) {
    this._countryProxy = value;
  }
  methods: Methods = new Methods();

  //Inputs
  //Count Input
  private _countInputValue = 1;
  get countInputValue(): number {
    return this._countInputValue;
  }
  set countInputValue(value: number) {
    this.isCountButtonChanged = true;
    if (
      parseInt(this.countInputElement.nativeElement.min) <= value &&
      parseInt(this.countInputElement.nativeElement.max) >= value
    ) {
      if (this.isPrivate) {
        if (this.isCitySelected && this.isPeriodSelected) {
          this._countInputValue = value;
          this.calculateTotalCost(this.periodValue, this.isPrivate);
        } else {
          this._countInputValue = parseInt(
            this.countInputElement.nativeElement.min
          );
        }
      } else {
        if (this.isPeriodSelected) {
          this._countInputValue = value;
          this.calculateTotalCost(this.periodValue, this.isPrivate);
        } else {
          this._countInputValue = parseInt(
            this.countInputElement.nativeElement.min
          );
        }
      }
    }
  }
  //Filtered Countries
  private _filteredCountriesValue = '';
  get filteredCountriesValue(): string {
    return this._filteredCountriesValue;
  }
  set filteredCountriesValue(value: string) {
    this._filteredCountriesValue = value;
    this.filteredCountriesProxy = this.methods.filter.filterCountriesProxy(
      this.countriesProxy,
      value,
      this.isPrivate
    );
    this.countryProxy = this.filteredCountriesProxy[0];
  }

  //Constructor
  constructor(private dataService: DataService) {}

  //Lifecycle Hooks
  ngOnInit(): void {
    this.countriesProxy = this.dataService.getCountriesProxy();
    this.filteredCountriesProxy = this.countriesProxy;
    this.countryProxy = this.filteredCountriesProxy[0];
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
    this.countryProxy = this.filteredCountriesProxy[i];
  }
  selectedCity(evt: Event, i: number): void {
    this.isCitySelected = true;
    this.cityNo = i;
    this.methods.selected.selectedBtn(evt, this.citiesBtnElementRef);
  }
  selectedPeriod(evt: Event): void {
    this.isPeriodSelected = true;
    const element = evt.currentTarget as HTMLInputElement;
    this.periodValue = element.value;
    this.calculateTotalCost(this.periodValue, this.isPrivate);
  }
  //Calculate Total Cost
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
  //Reset Values
  private resetValues(isPrivate: boolean): void {
    this.filteredCountriesProxy = this.methods.filter.filterCountriesProxy(
      this.countriesProxy,
      this.filteredCountriesValue,
      this.isPrivate
    );
    this.countryProxy = this.filteredCountriesProxy[0];
    this.radioWeekInputElement.nativeElement.checked = false;
    this.radioMonthInputElement.nativeElement.checked = false;
    this.radioHalfyearInputElement.nativeElement.checked = false;
    this.radioYearInputElement.nativeElement.checked = false;
    this.isPeriodSelected = false;
    this.isCountButtonChanged = false;
    this.isCitySelected = false;
    this._countInputValue = 1;
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
