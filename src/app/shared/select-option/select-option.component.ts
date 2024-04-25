import {
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { CountryProxy } from '../interfaces/country-proxy';
import { Methods } from '../classes/methods';

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
  //Filtered Countries
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
      true
    );
  }

  // Select Button
  toggleSelect(): void {
    const selectList = this.selectListElementRef!.nativeElement;
    const icon = this.iconElementRef!.nativeElement;
    this.isOpen = !this.isOpen;
    selectList.classList.toggle('active'); // Use toggle for better two-way control
    icon.classList.toggle('r-180'); // Use toggle for better two-way control
  }
  selectedOption(evt: Event): void {
    const element = evt.currentTarget as HTMLElement;
    const selectDisplay = this.selectDisplayElementRef!.nativeElement;
    const selectList = this.selectListElementRef!.nativeElement;
    const icon = this.iconElementRef!.nativeElement;
    selectDisplay.innerHTML = element.innerHTML;
    selectList.classList.toggle('active');
    icon.classList.toggle('r-180'); // Use toggle for better two-way control
  }

  ngOnInit(): void {
    this.filteredList = this.inputList;
  }
}
