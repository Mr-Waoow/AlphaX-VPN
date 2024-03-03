import { Injectable } from '@angular/core';
import { VpnPrice } from '../interfaces/vpn-price';

@Injectable({
  providedIn: 'root'
})
export class VpnPricesService {
  getVpnPrices():VpnPrice[] {
    return [
      {
        id: 1,
        name: 'SINGLE',
        description: 'High anonymity level at a reasonable price',
        icon: 'assets/images/vpn/Price_VPN/single-title2.svg',
        priceMonth: 9.9,
        priceHalfYear: 49.9,
        priceYear: 99.9,
      },
    ];
  }
  constructor() { }
}
