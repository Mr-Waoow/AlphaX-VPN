import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CountryProxy } from '../interfaces/country-proxy';
import { Methods } from '../classes/methods';
import { MajorServices } from '../interfaces/major-services';
import { DataService } from '../services/data.service';

@Component({
  selector: 'select-option',
  templateUrl: './select-option.component.html',
  styleUrl: './select-option.component.css',
})
export class SelectOptionComponent implements OnInit {
  //Elements
  @ViewChild('selectDisplay') selectDisplayElementRef!: ElementRef;
  @ViewChild('selectList') selectListElementRef!: ElementRef;
  @ViewChild('icon') iconElementRef!: ElementRef;
  //output
  @Input() inputList: any[] = [];
  @Input() imgPath: string = '';
  @Input() imgType: string = 'svg';
  @Input() isCountries: boolean = false;
  // Icons
  faCaretDown = faCaretDown;
  // Boolean
  isOpen = false; // Use 'isOpen' instead of 'isListOpened' for clarity
  methods: Methods = new Methods();
  massangersList: MajorServices[] = [
    {
      id: 0,
      name: 'dummy',
      icon: 'dummy',
    }
  ];
  countriesList: CountryProxy[] = [
    {
      id: '0',
      name: 'dummy',
      alpha2Code: 'dummy',
      alpha3Code: '',
      numericCode: '',
      callingCode: '',
      icon: 'dummy',
      cities: [''],
      isPrivate: false,
      isShared: false,
      sharedClass: '',
      privateClass: '',
      disabledClass: '',
      ipAvailibleShared: 0,
      ipAvailiblePrivate: 0,
      ipAvailiblePrivateCities: [],
      priceShared: [],
      pricePrivate: [],
      isMobile: false,
      operators: [''],
      operatorsIcon: [''],
      priceMobile: [],
      isResidential: true,
      isGeo: false,
      geoOnlineIPs: [0],
      geoThreads: 0,
      geoPriceResidential: [0],
      residentialOnlineIPs: [0],
      residentialThreads: 0,
      priceResidential: [0, 0, 0, 0],
      isDataCenter: false,
      dataCenterOnlineIPs: 0,
      dataCenterThreads: 0,
      priceDataCenter: [0],
      priceWithDiscount: 0,
      discount: 0,
    }
  ];
  private _filteredList: CountryProxy[] = [];
  get filteredList(): CountryProxy[] {
    return this._filteredList;
  }
  set filteredList(value: CountryProxy[]) {
    this._filteredList = value;
  }
  private _filteredCountriesValue = '';
  get filteredCountriesValue(): string {
    return this._filteredCountriesValue;
  }
  set filteredCountriesValue(value: string) {
    this._filteredCountriesValue = value;
    this.filteredList = this.methods.filter.filterCountriesProxy(
      this.inputList,
      value,
      true,
      false
    );
  }

  //Constructor
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMessengerApps().subscribe({
      next: (data: MajorServices[]) => {
        this.massangersList = data;
      },
      error: (error) => console.error('Error fetching messenger apps data', error),
    });
    this.dataService.getCountriesProxy().subscribe({
      next: (data: CountryProxy[]) => {
        this.countriesList = data;
        this.filteredList = this.countriesList;
      },
      error: (error) => console.error('Error fetching countries data', error),
    });
  }

  // Select Button
  toggleSelect(): void {
    try {
      const selectList = this.selectListElementRef!.nativeElement;
      const icon = this.iconElementRef!.nativeElement;
      this.isOpen = !this.isOpen;
      selectList.classList.toggle('active'); // Use toggle for better two-way control
      icon.classList.toggle('r-180'); // Use toggle for better two-way control
    } catch (error) {
      console.error('Error toggling select', error);
    }
  }
  selectedOption(evt: Event): void {
    try {
      const element = evt.currentTarget as HTMLElement;
      const selectDisplay = this.selectDisplayElementRef!.nativeElement;
      const selectList = this.selectListElementRef!.nativeElement;
      const icon = this.iconElementRef!.nativeElement;
      selectDisplay.innerHTML = element.innerHTML;
      selectList.classList.toggle('active');
      icon.classList.toggle('r-180'); // Use toggle for better two-way control
    } catch (error) {
      console.error('Error selecting option', error);
    }
  }

}
