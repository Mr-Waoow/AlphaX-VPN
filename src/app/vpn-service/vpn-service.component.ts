import { Component, OnInit } from '@angular/core';
import { VpnPeriod } from './interfaces/vpn-period';
import { VpnPeriodsService } from './services/vpn-periods.service';
import { VpnPrice } from './interfaces/vpn-price';
import { VpnPricesService } from './services/vpn-prices.service';

@Component({
  selector: 'xvpn-vpn-service',
  templateUrl: './vpn-service.component.html',
  styleUrl: './vpn-service.component.css',
})
export class VpnServiceComponent implements OnInit {
  vpnPeriods: VpnPeriod[] = [];
  vpnPrices: VpnPrice[] = [];
  constructor(
    private vpnPeriodService: VpnPeriodsService,
    private vpnPricesService: VpnPricesService
  ) {}

  ngOnInit(): void {
    this.vpnPeriods = this.vpnPeriodService.getVpnPeriods();
    this.vpnPrices = this.vpnPricesService.getVpnPrices();
  }
}
