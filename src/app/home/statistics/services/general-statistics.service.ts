import { GeneralStatistic } from "../interfaces/general-statistic";

export class GeneralStatisticsService {
  getGeneralStatistics(): GeneralStatistic[] {
    return [
      {
        generalStatisticId: 1,
        generalStatisticName: 'residential proxies',
        generalStatisticNumber: 150,
        generalStatisticIsK: true,
      },
      {
        generalStatisticId: 2,
        generalStatisticName: 'exclusive proxies',
        generalStatisticNumber: 290,
        generalStatisticIsK: true,
      },
      {
        generalStatisticId: 3,
        generalStatisticName: 'personal proxy countries',
        generalStatisticNumber: 40,
        generalStatisticIsK: false,
      },
      {
        generalStatisticId: 4,
        generalStatisticName: 'VPN servers countries',
        generalStatisticNumber: 21,
        generalStatisticIsK: false,
      },
    ];
  }
  constructor() {}
}
