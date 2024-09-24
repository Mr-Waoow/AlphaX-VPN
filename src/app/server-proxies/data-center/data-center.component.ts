import { Component, HostListener, OnInit } from '@angular/core';
import { faList, faGrip } from '@fortawesome/free-solid-svg-icons';
import { CountryProxy } from '../../shared/interfaces/country-proxy';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'xvpn-data-center',
  templateUrl: './data-center.component.html',
  styleUrl: './data-center.component.css',
})
export class DataCenterComponent implements OnInit {
  faList = faList;
  faGrip = faGrip;
  isGridView = false;
  countriesProxy: CountryProxy[] = [];
  dataCenterProxies: CountryProxy[] = [];
  windowWidth = window.innerWidth;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.dataService.getCountriesProxy().subscribe({
      next: (data: CountryProxy[]) => {
        this.countriesProxy = data;
        this.dataCenterProxies = this.countriesProxy.filter((dataCenter) => {
          return dataCenter.isDataCenter;
        });
      },
      error: (error) =>
        console.error('Error fetching countries proxy data', error),
    });
  }
  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
  }
  gridView() {
    this.isGridView = true;
  }
  listView() {
    this.isGridView = false;
  }
}
