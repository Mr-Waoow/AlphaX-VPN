import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CountryProxy } from '../../shared/interfaces/country-proxy';
import { ThemedProxy } from '../../shared/interfaces/themed-proxy';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'xvpn-plans-table',
  templateUrl: './plans-table.component.html',
  styleUrl: './plans-table.component.css',
})
export class PlansTableComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() plans: any[] | undefined;
  @ViewChildren('dropDownButton')
  dropDownButtonsElement!: QueryList<ElementRef>;

  countriesProxy: CountryProxy[] = [];
  geoProxy: CountryProxy[] = [];
  themedProxy: ThemedProxy[] = [];
  rotatingProxy: CountryProxy[] = [];

  isMix: boolean = true;
  isPremium: boolean = true;
  isGeo: boolean = true;
  isThemed: boolean = true;
  isRotating: boolean = true;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.countriesProxy = this.dataService.getCountriesProxy();
    this.geoProxy = this.countriesProxy.filter((geo) => {
      return geo.isGeo;
    });
    this.themedProxy = this.dataService.getThemedProxy();
    this.rotatingProxy = this.countriesProxy.filter((rotating) => {
      return rotating.isResidential;
    });
  }
  @HostListener('document:click', ['$event'])
  handleClickOutside(evt: Event) {
    this.removeDropDownListClass(0, evt, this.dropDownButtonsElement);
  }
  dropDowen(evt: Event): void {
    const element = evt.currentTarget as HTMLInputElement;
    const dropDowen = element.parentNode as HTMLElement;
    const dropdownList = dropDowen?.querySelector(
      '.dropdown-menu'
    ) as HTMLElement;
    dropdownList?.classList.toggle('show');
  }
  dropDowenItem(evt: Event): void {
    const element = evt.currentTarget as HTMLElement;
    const dropdownListItem = element.parentNode as HTMLElement;
    const dropdownList = dropdownListItem?.parentNode as HTMLElement;
    const dropDowen = dropdownList?.parentNode as HTMLElement;
    const dropdownButton = dropDowen?.querySelector(
      '.dropdown-button'
    ) as HTMLInputElement;
    if (dropdownButton !== null && dropdownButton !== undefined) {
      dropdownButton.innerHTML = element.innerHTML;
      dropdownList?.classList.toggle('show');
    }
  }
  removeDropDownListClass(
    n: number = 0,
    evt: Event,
    dropDownButtons: QueryList<ElementRef>
  ): number {
    const i = n;
    const clickedElement = evt.target as HTMLElement;
    const dropDownButtonsArray = Array.from(dropDownButtons);
    if (i < dropDownButtonsArray.length) {
      const dropDownButton = dropDownButtonsArray[i].nativeElement;
      const dropDowen = dropDownButton.parentNode;
      const dropDownList = dropDowen?.children[1];
      if (clickedElement !== dropDownButtonsArray[i].nativeElement) {
        dropDownList?.classList.remove('show');
        console.log(dropDownButtonsArray[1].nativeElement.parentNode);
        return this.removeDropDownListClass(i + 1, evt, dropDownButtons);
      }
    } else return 0;
    return 0;
  }
  createRange(number: number) {
    // return new Array(number);
    return new Array(number).fill(0).map((n, index) => index + 1);
  }
  filterClicked(evt: Event): void {
    const button = evt.currentTarget as HTMLElement;;
    switch (button.getAttribute('data-filter')) {
      case 'all':
        this.isMix = true;
        this.isPremium = true;
        this.isGeo = true;
        this.isThemed = true;
        this.isRotating = true;
        break;
      case 'mix':
        this.isMix = true;
        this.isPremium = false;
        this.isGeo = false;
        this.isThemed = false;
        this.isRotating = false;
        break;
      case 'premium':
        this.isMix = false;
        this.isPremium = true;
        this.isGeo = false;
        this.isThemed = false;
        this.isRotating = false;
        break;
      case 'geo':
        this.isMix = false;
        this.isPremium = false;
        this.isGeo = true;
        this.isThemed = false;
        this.isRotating = false;
        break;
      case 'themed':
        this.isMix = false;
        this.isPremium = false;
        this.isGeo = false;
        this.isThemed = true;
        this.isRotating = false;
        break;
      case 'rotating':
        this.isMix = false;
        this.isPremium = false;
        this.isGeo = false;
        this.isThemed = false;
        this.isRotating = true;
        break;
      default:
        alert('error')
        break;
    }
  }
}
