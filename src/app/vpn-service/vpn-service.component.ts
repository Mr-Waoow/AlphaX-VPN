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
  intiated: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getVpnPeriods().subscribe({
      next: (data: VpnPeriod[]) => {
        this.vpnPeriods = data;
      },
      error: (error) => console.error('Error fetching vpn periods data', error),
    });
    this.dataService.getVpnPrices().subscribe({
      next: (data: VpnPrice[]) => {
        this.vpnPrices = data;
      },
      error: (error) => console.error('Error fetching vpn prices data', error),
    });
    this.dataService.getPlatforms().subscribe({
      next: (data: Platform[]) => {
        this.platforms = data;
      },
      error: (error) => console.error('Error fetching platforms data', error),
    });
    this.dataService.getVpnFeatures().subscribe({
      next: (data: Feature[]) => {
        this.features = data;
      },
      error: (error) => console.error('Error fetching features data', error),
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.intiated = true;
    }, 200);
  }
}
