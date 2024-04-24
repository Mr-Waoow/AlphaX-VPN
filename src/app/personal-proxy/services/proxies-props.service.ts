import { Injectable } from '@angular/core';
import { ProxyProps } from '../interfaces/proxy-props';

@Injectable({
  providedIn: 'root',
})
export class ProxiesPropsService {
  getProxiesProps(): ProxyProps[] {
    return [
      {
        id: 1,
        name: 'SECURITY',
        icon: 'benefit-1',
        describtion:
          'Authorization and secure connection make our proxies the most reliable solution.',
      },
      {
        id: 2,
        name: 'STABILITY',
        icon: 'benefit-2',
        describtion:
          'High bandwidth and static IP address are guaranteed for the whole period of use.',
      },
      {
        id: 3,
        name: 'PRIVACY',
        icon: 'benefit-3',
        describtion:
          'Proxies are assigned to one or there users depending on plan type (Private or Shareable).',
      },
      {
        id: 4,
        name: 'GEO-LOCATION',
        icon: 'benefit-4',
        describtion: 'Choose from more 40 countries or place a custom-order.',
      },
      {
        id: 5,
        name: 'MULTITASKING',
        icon: 'benefit-5',
        describtion:
          'Circumvent region blocks, work on social media networks, parse data or play online games.',
      },
      {
        id: 6,
        name: 'VERSATILITY',
        icon: 'benefit-6',
        describtion: 'Support of SOCKS4/4a, SOCKS5, HTTP/S and high speed.',
      },
    ];
  }
  constructor() {}
}
