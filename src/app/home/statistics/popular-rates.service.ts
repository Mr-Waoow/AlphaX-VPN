import { PopularRate } from "./popular-rate";

export class PopularRatesService {
  getPopularRates(): PopularRate[] {
    return [
      {
        popularRateId: 1,
        popularRateImgUrl: 'assets/images/statistics/global_mix.png',
        popularRateName: 'global mix',
        popularRateIp: '99 000 IP',
      },
      {
        popularRateId: 2,
        popularRateImgUrl: 'assets/images/statistics/mail_special.png',
        popularRateName: 'mail special',
        popularRateIp: '99 000 IP',
      },
      {
        popularRateId: 3,
        popularRateImgUrl: 'assets/images/statistics/Server_USA.png',
        popularRateName: 'server',
        popularRateIp: '5 000 IP',
      },
      {
        popularRateId: 4,
        popularRateImgUrl: 'assets/images/statistics/exclusive_plus.png',
        popularRateName: 'exclusive plus',
        popularRateIp: '10 000 IP',
      },
    ];
  }
  constructor() {}
}
