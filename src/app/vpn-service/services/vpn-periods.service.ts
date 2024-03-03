import { Injectable } from '@angular/core';
import { VpnPeriod } from '../interfaces/vpn-period';

@Injectable({
  providedIn: 'root',
})
export class VpnPeriodsService {
  getVpnPeriods(): VpnPeriod[] {
    return [
      {
        id: 1,
        name: 'Test Period',
        description: 'Speed is 10 mb/s',
        button: 'Try for free',
        counteis: ['Netherlands', 'United States', 'Russia'],
      },
    ];
  }
  constructor() {}
}
