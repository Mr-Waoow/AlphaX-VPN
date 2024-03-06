import { Component, OnInit } from '@angular/core';
import { VpnPeriod } from './interfaces/vpn-period';
import { VpnPeriodsService } from './services/vpn-periods.service';
import { VpnPrice } from './interfaces/vpn-price';
import { VpnPricesService } from './services/vpn-prices.service';
import { faWindows, faLinux, faApple } from '@fortawesome/free-brands-svg-icons';
import { OperatingSystemsService } from './services/operating-systems.service';
import { OperatingSystem } from './interfaces/operating-system';
import { ProxyChecker } from './interfaces/proxy-checker';
import { ProxiesCheckersService } from './services/proxies-checkers.service';
import { FreeProxy } from './interfaces/free-proxy';
import { FreeProxiesService } from './services/free-proxies.service';

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
    private vpnPeriodService: VpnPeriodsService,
    private vpnPricesService: VpnPricesService,
    private operatingSystemsService: OperatingSystemsService,
    private proxiesCheckersService: ProxiesCheckersService,
    private freeProxiesService: FreeProxiesService
  ) {}

  ngOnInit(): void {
    this.vpnPeriods = this.vpnPeriodService.getVpnPeriods();
    this.vpnPrices = this.vpnPricesService.getVpnPrices();
    this.operatingSystems = this.operatingSystemsService.getOperatingSystems();
    this.proxyCheckers = this.proxiesCheckersService.getProxiesCheckers();
    this.freeProxies = this.freeProxiesService.getFreeProxies();
  }
}
