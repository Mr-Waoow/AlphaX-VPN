import { Component, OnInit } from '@angular/core';
import { VpnPeriod } from './vpn-period';
import { VpnPeriodsService } from './vpn-periods.service';

@Component({
  selector: 'xvpn-vpn-service',
  templateUrl: './vpn-service.component.html',
  styleUrl: './vpn-service.component.css',
})
export class VpnServiceComponent implements OnInit {
  vpnPeriods: VpnPeriod[] = [];
  constructor(private vpnPeriodService: VpnPeriodsService) {}

  ngOnInit(): void {
    this.vpnPeriods = this.vpnPeriodService.getVpnPeriods();
  }
}
