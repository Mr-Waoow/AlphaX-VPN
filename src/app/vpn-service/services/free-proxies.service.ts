import { Injectable } from '@angular/core';
import { FreeProxy } from '../interfaces/free-proxy';

@Injectable({
  providedIn: 'root'
})
export class FreeProxiesService {
  getFreeProxies(): FreeProxy[] {
    return [
      {
        id: 1,
        name: 'unlimited traffic',
        description:
          'Unlimited traffic on any proxy packs for complete freedom in the Internet',
        icon: 'assets/images/shared_proxy/pack_individ/unlimited_traffic.svg',
      },
      {
        id: 2,
        name: 'wide choice of locations',
        description:
          'Unlimited traffic on any proxy packs for complete freedom in the Internet',
        icon: 'assets/images/shared_proxy/pack_individ/wide_choice_of_locations.svg',
      },
      {
        id: 3,
        name: 'support all protocols',
        description:
          'Unlimited traffic on any proxy packs for complete freedom in the Internet',
        icon: 'assets/images/shared_proxy/pack_individ/support_all_protocols.svg',
      },
      {
        id: 4,
        name: 'all-in-one solution',
        description:
          'Unlimited traffic on any proxy packs for complete freedom in the Internet',
        icon: 'assets/images/shared_proxy/pack_individ/all_in_one_solution.svg',
      },
    ];
  }
  constructor() { }
}
