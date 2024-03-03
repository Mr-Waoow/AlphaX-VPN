import { ProxyList } from "../interfaces/proxy-list";

export class ProxyDataService {
  getProxyList(): ProxyList[] {
    return [
      {
        proxyServiceId: 1,
        proxyServiceImgUrl: 'assets/images/pricing_table/proxy_plans.png',
        proxyServiceName: 'Proxy Plans',
        proxyServiceDesc: 'Geo, Mix and Them packages proxies.',
        proxyServiceOffers1: 'Packages from 100 to 90 000.',
        proxyServiceOffers2: 'SOCKS4/4a, SOCKS5, and HTTP/S protocols.',
        proxyServiceOffers3: 'Exclusive packages. only in one hands.',
        proxyServiceOffers4:
          'Theme package proxies for Youtube, Twitch and Email.',
        proxyServiceOffers5: 'Unlimited traffic.',
      },
      {
        proxyServiceId: 2,
        proxyServiceImgUrl:
          'assets/images/pricing_table/exclusive_plus_proxy.png',
        proxyServiceName: 'Exclusive Plus Proxy',
        proxyServiceDesc: 'Proxy lists strictly in one hand!',
        proxyServiceOffers1: 'Up to 100 000 unique IP a day.',
        proxyServiceOffers2: 'Maximum Online Stability.',
        proxyServiceOffers3: 'Support HTTP(S) ᴎ SOCKS5.',
        proxyServiceOffers4: 'Uptime 10% every hour.',
        proxyServiceOffers5: 'Crystal Clear Online (no history).',
      },
      {
        proxyServiceId: 3,
        proxyServiceImgUrl: 'assets/images/pricing_table/mobile_proxy.png',
        proxyServiceName: 'Mobile Proxy',
        proxyServiceDesc: 'Dedicated IP mobile operators.',
        proxyServiceOffers1: 'Personal IP and 10 Streams for work.',
        proxyServiceOffers2: 'No bans and high trust IP addresses.',
        proxyServiceOffers3: 'Dynamic IP change every 2 minutes.',
        proxyServiceOffers4: 'The most popular mobile operators in Europe.',
        proxyServiceOffers5: 'Support HTTP(S) and SOCKS4/4a/5.',
      },
      {
        proxyServiceId: 4,
        proxyServiceImgUrl: 'assets/images/pricing_table/personal_proxy.png',
        proxyServiceName: 'Personal Proxy',
        proxyServiceDesc: 'Dedicated IP for personal use.',
        proxyServiceOffers1: 'Individual IP.',
        proxyServiceOffers2: 'Max speed.',
        proxyServiceOffers3: 'Use for any tasks.',
        proxyServiceOffers4: 'Connecting to new locations upon request.',
        proxyServiceOffers5: 'Protocols SOCKS4, SOCKS4a, and SOCKS5.',
      },
      {
        proxyServiceId: 5,
        proxyServiceImgUrl: 'assets/images/pricing_table/server_proxies.png',
        proxyServiceName: 'Server Proxies',
        proxyServiceDesc: 'Unlimited traffic with high speed.',
        proxyServiceOffers1: '10500 IPv5 addresses.',
        proxyServiceOffers2: 'Unlimited traffic.',
        proxyServiceOffers3: 'Supports HTTP(S), Socks 4/5 protocols.',
        proxyServiceOffers4: 'High speed connection.',
        proxyServiceOffers5: 'Maximum Uptime of servers.',
      },
      {
        proxyServiceId: 6,
        proxyServiceImgUrl: 'assets/images/pricing_table/vpn_service.png',
        proxyServiceName: 'VPN Service',
        proxyServiceDesc: 'Anonymous VPN in 20 countries.',
        proxyServiceOffers1: 'No-Logs policy.',
        proxyServiceOffers2: 'Protocols: OpenVPN, PPP, HTTP, and IPsec.',
        proxyServiceOffers3: 'Single and Double VPN.',
        proxyServiceOffers4: 'Maximum speed without channel limits.',
        proxyServiceOffers5: 'Connecting to new locations upon request.',
      },
    ];
  }
  constructor() {}
}
