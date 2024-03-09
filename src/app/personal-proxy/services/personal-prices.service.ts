import { Injectable } from '@angular/core';
import { PersonalPrice } from '../interfaces/personal-price';

@Injectable({
  providedIn: 'root',
})
export class PersonalPricesService {
  getPersonalPrices(): PersonalPrice[] {
    return [
      {
        id: 1,
        name: 'Private',
        serviceName: 'Personal Proxy',
        price: 5.0,
        period: 'from 30 days',
        features: [
          'Data Center Proxy',
          'IP assigned only to you!',
          '51 countries to choose from!',
          'Choose proxy fingerprint',
          'Unlimited data',
          'Unlimited bandwidth',
          'HTTPS/SOCKS5 supporеtd',
          'Authorization by IP or login:password',
          '25, 465, and 587 ports are closed',
          'Spamming, cracking, carding, and scanning are not allowed',
        ],
        featuresIcon: [
          'assets/images/personal_proxy/pricing_table/server.png',
          'assets/images/personal_proxy/pricing_table/user.png',
          'assets/images/personal_proxy/pricing_table/globe.png',
          'assets/images/personal_proxy/pricing_table/fingerprint.png',
          'assets/images/personal_proxy/pricing_table/forever.png',
          'assets/images/personal_proxy/pricing_table/rocket.png',
          'assets/images/personal_proxy/pricing_table/shield.png',
          'assets/images/personal_proxy/pricing_table/lock.png',
          'assets/images/personal_proxy/pricing_table/block.png',
          'assets/images/personal_proxy/pricing_table/block.png',
        ],
      },
      {
        id: 2,
        name: 'Shared',
        serviceName: 'Personal Proxy',
        price: 0.2,
        period: 'from 30 days',
        features: [
          'Data Center Proxy',
          'Several users per IP',
          '14 countries are available',
          'Choose activity groups',
          'Unlimited data',
          'Unlimited bandwidth',
          'HTTPS/SOCKS5 supporеtd',
          'Authorization by IP or login:password',
          '25, 465, and 587 ports are closed',
          'Spamming, cracking, carding, and scanning are not allowed',
        ],
        featuresIcon: [
          'assets/images/personal_proxy/pricing_table/server.png',
          'assets/images/personal_proxy/pricing_table/group.png',
          'assets/images/personal_proxy/pricing_table/globe.png',
          'assets/images/personal_proxy/pricing_table/switch.png',
          'assets/images/personal_proxy/pricing_table/forever.png',
          'assets/images/personal_proxy/pricing_table/rocket.png',
          'assets/images/personal_proxy/pricing_table/shield.png',
          'assets/images/personal_proxy/pricing_table/lock.png',
          'assets/images/personal_proxy/pricing_table/block.png',
          'assets/images/personal_proxy/pricing_table/block.png',
        ],
      },
    ];
  }
  constructor() {}
}
