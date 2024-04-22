import { Injectable } from '@angular/core';
import { IndividualRequest } from '../interfaces/individual-request';

@Injectable({
  providedIn: 'root'
})
export class IndividualRequestsService {
  getIndividualRequests(): IndividualRequest[] {
    return [
      {
        id: 1,
        name: 'Proxies of any country',
        icon: 'query_benefit_1',
      },
      {
        id: 2,
        name: 'Fast launch of new proxies on request',
        icon: 'query_benefit_2',
      },
      {
        id: 3,
        name: 'Order volume starts from 100 IPs',
        icon: 'query_benefit_3',
      },
    ];
  }
  constructor() { }
}
