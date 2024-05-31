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
  @ViewChild('citiesRadio')
  citiesRadioElementRef!: QueryList<ElementRef>;

  //InputElement
  @ViewChild('radioDay')
  radioDayInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('radioWeek')
  radioWeekInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('radioMonth')
  radioMonthInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('radioHalfyear')
  radioHalfyearInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('radioYear') radioYearInputElement!: ElementRef<HTMLInputElement>;
  @ViewChild('operatorsRadio')
  operatorsRadioInputElement!: QueryList<HTMLInputElement>;
  @ViewChild('countInput')
  countInputElement!: ElementRef<HTMLInputElement>;

  @Input() title: string | undefined;
  @Input() isMobile: boolean | undefined;
  //Icons
  faUser = faUser;
  faUserGroup = faUserGroup;
  //Variables
  //Booleans
  isCitySelected = false;
  isPeriodSelected = false;
  isCountButtonChanged = false;
  isPrivate = true;
  mobileIsShow = false;
  //Numbers
  cityNo = -1;
  totalCost = 0;
  costPerDay = 0;
  privateCountriesNumber = 0;
  sharedCountriesNumber = 0;
  array1length = 0;
  array2length = 0;
  array3length = 0;
  //Strings
  periodValue = 'month';
  //Arrays
  assignedOperator: string[] = [];
  private countriesProxy: CountryProxy[] = [];
  countriesProxy1: CountryProxy[] = [];
  countriesProxy2: CountryProxy[] = [];
  countriesProxy3: CountryProxy[] = [];
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
          this.calculateTotalCost(this.periodValue, 'private');
        } else {
          this._countInputValue = parseInt(
            this.countInputElement.nativeElement.min
          );
        }
      } else {
        if (this.isPeriodSelected) {
          this._countInputValue = value;
          this.calculateTotalCost(this.periodValue, 'shared');
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
    if (this.isMobile) {
      this.filteredCountriesProxy = this.methods.filter.filterCountriesProxy(
        this.countriesProxy,
        value,
        this.isPrivate,
        this.isMobile ?? false
      );
      this.countriesProxy1 = this.filteredCountriesProxy.slice(
        0,
        Math.floor(this.filteredCountriesProxy.length / 3) + 1
      );
      this.countriesProxy2 = this.filteredCountriesProxy.slice(
        Math.floor(this.filteredCountriesProxy.length / 3) + 1,
        Math.floor((this.filteredCountriesProxy.length / 3) * 2) + 1
      );
      this.countriesProxy3 = this.filteredCountriesProxy.slice(
        Math.floor((this.filteredCountriesProxy.length / 3) * 2) + 1,
        this.filteredCountriesProxy.length
      );
    } else {
      this.filteredCountriesProxy = this.methods.filter.filterCountriesProxy(
        this.countriesProxy,
        value,
        this.isPrivate,
        this.isMobile ?? false
      );
    }
    this.countryProxy = this.filteredCountriesProxy[0];
  }

  //Constructor
  constructor(private dataService: DataService) {}

  //Lifecycle Hooks
  ngOnInit(): void {
    this.countriesProxy = this.dataService.getCountriesProxy();
    if (this.isMobile) {
      this.filteredCountriesProxy = this.countriesProxy.filter((country) => {
        return country.isMobile;
      });
      this.countriesProxy1 = this.filteredCountriesProxy.slice(
        0,
        Math.floor(this.filteredCountriesProxy.length / 3) + 1
      );
      this.countriesProxy2 = this.filteredCountriesProxy.slice(
        Math.floor(this.filteredCountriesProxy.length / 3) + 1,
        Math.floor((this.filteredCountriesProxy.length / 3) * 2) + 1
      );
      this.countriesProxy3 = this.filteredCountriesProxy.slice(
        Math.floor((this.filteredCountriesProxy.length / 3) * 2) + 1,
        this.filteredCountriesProxy.length
      );
    } else {
      this.filteredCountriesProxy = this.countriesProxy;
    }
    this.countryProxy = this.filteredCountriesProxy[0];
    this.privateCountriesNumber = this.countriesProxy.filter(
      (country) => country.isPrivate
    ).length;
    this.sharedCountriesNumber = this.countriesProxy.filter(
      (country) => country.isShared
    ).length;
    if (this.isMobile) {
    } else {
      setTimeout(() => {
        this.countriesBtnElementRef.toArray()[0].nativeElement.click();
      }, 50);
    }
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
    setTimeout(() => {
      this.countriesBtnElementRef.toArray()[0].nativeElement.click();
    }, 50);
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
    setTimeout(() => {
      this.countriesBtnElementRef.toArray()[0].nativeElement.click();
    }, 50);
  }
  //Selected
  selectedCountry(evt: Event, i: number): void {
    this.methods.selected.selectedBtn(evt, this.countriesBtnElementRef);
    this.methods.selected.removeClass(this.citiesBtnElementRef, 0, 'selected');
    this.resetValues(this.isPrivate);
    if (this.isPrivate) {
      this.radioMonthInputElement.nativeElement.checked = true;
      this.citiesBtnElementRef.toArray()[0].nativeElement.click();
    } else {
      this.radioWeekInputElement.nativeElement.checked = true;
    }
    this.countryProxy = this.filteredCountriesProxy[i];
  }
  selectedCity(evt: Event, i: number): void {
    this.isCitySelected = true;
    this.cityNo = i;
    this.methods.selected.selectedBtn(evt, this.citiesBtnElementRef);
  }
  selectedPeriod(evt: Event, billType: string): void {
    this.isPeriodSelected = true;
    const element = evt.currentTarget as HTMLInputElement;
    this.periodValue = element.value;
    this.calculateTotalCost(this.periodValue, billType);
  }
  //Calculate Total Cost
  calculateTotalCost(periodValue: string, billType: string): void {
    billType = billType.toLowerCase();
    switch (billType) {
      case 'private':
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
        break;
      case 'shared':
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
        break;
      case 'mobile':
        switch (periodValue) {
          case 'day':
            this.totalCost =
              (this.countryProxy?.priceMobile[0] ?? 0) * this.countInputValue;
            this.costPerDay = this.totalCost / 1;
            break;
          case 'week':
            this.totalCost =
              (this.countryProxy?.priceMobile[1] ?? 0) * this.countInputValue;
            this.costPerDay = this.totalCost / 7;
            break;
          case 'month':
            this.totalCost =
              (this.countryProxy?.priceMobile[2] ?? 0) * this.countInputValue;
            this.costPerDay = this.totalCost / 30;
            break;
          default:
            this.totalCost =
              (this.countryProxy?.priceShared[0] ?? 0) * this.countInputValue;
            this.costPerDay = this.totalCost / 1;
        }
        break;
      default: {
        alert('there is no such bill type');
        break;
      }
    }
  }
  //Reset Values
  private resetValues(isPrivate: boolean): void {
    this.filteredCountriesProxy = this.methods.filter.filterCountriesProxy(
      this.countriesProxy,
      this.filteredCountriesValue,
      this.isPrivate,
      this.isMobile ?? false
    );
    this.countryProxy = this.filteredCountriesProxy[0];
    this.radioDayInputElement.nativeElement.checked = false;
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
  ridoChange(evt: Event): void {
    const element = evt.currentTarget as HTMLInputElement;
    const radios = element.parentElement?.querySelectorAll(
      '.real-radio'
    ) as unknown as HTMLInputElement;
    const customRadios =
      element.parentElement?.querySelectorAll('.custom-radio');
    const radio = element.querySelector('.real-radio') as HTMLInputElement;
    const customRadio = element.querySelector('.custom-radio');
    customRadios?.forEach((customRadio) => {
      radios.checked = false;
      customRadio.classList.remove('checked');
    });
    radio.checked = true;
    customRadio?.classList.add('checked');
  }
  openMobileTarge(evt: Event, i: number): void {
    this.countryProxy = this.filteredCountriesProxy[i];
    this.methods.openable.openMobileTarget(evt);
  }
}
