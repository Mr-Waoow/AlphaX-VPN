import { Component, Input, OnInit } from '@angular/core';
import { VpnPrice } from '../interfaces/vpn-price';

@Component({
  selector: 'xvpn-vpn-price',
  templateUrl: './vpn-price.component.html',
  styleUrl: './vpn-price.component.css'
})
export class VpnPriceComponent implements OnInit{
  @Input() inputList!: VpnPrice;
  constructor() {}
  ngOnInit(): void {
  }
}
