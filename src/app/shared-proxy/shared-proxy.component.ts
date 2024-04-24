import { Component, OnInit } from '@angular/core';
import { SharedPrice } from './Interfaces/shared-price';
import { SharedPricesService } from './Services/shared-prices.service';
import { Methods } from '../shared/classes/methods';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
  constructor(private sharedPricesService: SharedPricesService) {}
  ngOnInit(): void {
    this.sharedPrices = this.sharedPricesService.getSharedPrices();
  }
  openDivTarget(evt: Event, id: string): void {
    this.methods.openable.openDivTarget(evt, id);
  }
}
