import { Component, OnInit } from '@angular/core';
import { VpnPeriod } from '../shared/interfaces/vpn-period';
import { VpnPrice } from '../shared/interfaces/vpn-price';
import { DataService } from '../shared/services/data.service';
import { Platform } from '../shared/interfaces/platform';
import { Feature } from '../shared/interfaces/feature';

@Component({
  selector: 'xvpn-vpn-service',
  templateUrl: './vpn-service.component.html',
  styleUrl: './vpn-service.component.css',
})
export class VpnServiceComponent implements OnInit {
  // Properties
  vpnPeriods: VpnPeriod[] = [];
  vpnPrices: VpnPrice[] = [];
  platforms: Platform[] = [];
  features: Feature[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.vpnPeriods = this.dataService.getVpnPeriods();
    this.vpnPrices = this.dataService.getVpnPrices();
    this.platforms = this.dataService.getPlatforms();
    this.features = this.dataService.getVpnFeatures();
  }
}
