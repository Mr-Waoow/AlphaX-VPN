import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedPricesService {
  getSharedPrices() {
    return [
      {
        title: 'Shared',
        featuresName: [
          'Online',
          'Updates',
          'Threads',
          'Day / Month',
        ],
        features: [
          '10 000 - 20 000 IP',
          'Up to 20% every 3 hours',
          '300',
          '$3 / $10',
        ],
      },
    ];
  }
  constructor() { }
}
