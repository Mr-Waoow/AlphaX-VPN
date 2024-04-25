import { Component, OnInit } from '@angular/core';
import { VpnPeriod } from '../shared/interfaces/vpn-period';
import { VpnPrice } from '../shared/interfaces/vpn-price';
import { faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons';
import { OperatingSystem } from '../shared/interfaces/operating-system';
import { ProxyChecker } from '../shared/interfaces/proxy-checker';
import { FreeProxy } from '../shared/interfaces/free-proxy';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'xvpn-vpn-service',
  templateUrl: './vpn-service.component.html',
  styleUrl: './vpn-service.component.css',
})
export class VpnServiceComponent implements OnInit {
  faWindows = faWindows;
  faLinux = faLinux;
  faApple = faApple;
  vpnPeriods: VpnPeriod[] = [];
  vpnPrices: VpnPrice[] = [];
  proxyCheckers: ProxyChecker[] = [];
  operatingSystems: OperatingSystem[] = [];
  freeProxies: FreeProxy[] = [];
  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.vpnPeriods = this.dataService.getVpnPeriods();
    this.vpnPrices = this.dataService.getVpnPrices();
    this.operatingSystems = this.dataService.getOperatingSystems();
    this.proxyCheckers = this.dataService.getProxiesCheckers();
    this.freeProxies = this.dataService.getFreeProxies();
  }
}
