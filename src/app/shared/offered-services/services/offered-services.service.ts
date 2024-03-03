import { OfferedService } from "../interfaces/offered-service";

export class OfferedServicesService {
  getOfferedService(): OfferedService[] {
    return [
      {
        offerdServiceId: 1,
        offerdServiceLink: 'residential.proxy',
        offerdServiceImgUrl:
          'assets/images/Offered-Services/residential_proxy.png',
        offerdServiceName: 'residential proxy',
        offerdServiceIsNew: false,
      },
      {
        offerdServiceId: 2,
        offerdServiceLink: 'exclusive.plus',
        offerdServiceImgUrl:
          'assets/images/Offered-Services/exclusive_plus.png',
        offerdServiceName: 'exclusive plus',
        offerdServiceIsNew: false,
      },
      {
        offerdServiceId: 3,
        offerdServiceLink: 'personal.proxy',
        offerdServiceImgUrl:
          'assets/images/Offered-Services/personal_proxy.png',
        offerdServiceName: 'personal proxy',
        offerdServiceIsNew: false,
      },
      {
        offerdServiceId: 4,
        offerdServiceLink: 'server.proxies',
        offerdServiceImgUrl:
          'assets/images/Offered-Services/server_proxies.png',
        offerdServiceName: 'server proxies',
        offerdServiceIsNew: false,
      },
      {
        offerdServiceId: 5,
        offerdServiceLink: 'shared.proxy',
        offerdServiceImgUrl: 'assets/images/Offered-Services/shared.png',
        offerdServiceName: 'shared proxy',
        offerdServiceIsNew: false,
      },
      {
        offerdServiceId: 6,
        offerdServiceLink: 'mobile.proxy',
        offerdServiceImgUrl: 'assets/images/Offered-Services/mobile_proxy.png',
        offerdServiceName: 'mobile proxy',
        offerdServiceIsNew: true,
      },
      {
        offerdServiceId: 7,
        offerdServiceLink: 'vpn.service',
        offerdServiceImgUrl: 'assets/images/Offered-Services/vpn_service.png',
        offerdServiceName: 'VPN service',
        offerdServiceIsNew: false,
      },
    ];
  }
  constructor() {}
}
