import { Injectable } from '@angular/core';
import { ProxyChecker } from '../interfaces/proxy-checker';

@Injectable({
  providedIn: 'root'
})
export class ProxiesCheckersService {
  getProxiesCheckers(): ProxyChecker[] {
    return [
      {
        id: 1,
        name: 'Country and city geo-location filter',
        icon: 'assets/images/shared_proxy/shared_checker/location.svg',
        position: "left",
      },
      {
        id: 2,
        name: 'Speed and latency checking',
        icon: 'assets/images/shared_proxy/shared_checker/time.svg',
        position: "left",
      },
      {
        id: 3,
        name: 'Proxy IP address detection',
        icon: 'assets/images/shared_proxy/shared_checker/ip.svg',
        position: "left",
      },
      {
        id: 4,
        name: 'PTR-record and the anonymity level',
        icon: 'assets/images/shared_proxy/shared_checker/hacker.svg',
        position: "right",
      },
      {
        id: 5,
        name: 'Spamhaus records checking',
        icon: 'assets/images/shared_proxy/shared_checker/share.svg',
        position: "right",
      },
      {
        id: 6,
        name: 'Export results in your own format',
        icon: 'assets/images/shared_proxy/shared_checker/export-document.svg',
        position: "right",
      },
    ];
  }
  constructor() { }
}
