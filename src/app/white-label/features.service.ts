import { Injectable } from '@angular/core';
import { Feature } from './feature';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {
  getFeatures(): Feature[] {
    return [
      {
        id: 1,
        name: 'Fast start',
        description:
          'Launching your own proxy rental service will not require a serious investment of time, money and technical resources.',
        icon: 'assets/images/white_label/you_get/fast.svg',
      },
      {
        id: 2,
        name: 'Branding',
        description:
          'The service will work on your domain, the site and cabinet will be designed in your corporate style.',
        icon: 'assets/images/white_label/you_get/brand.svg',
      },
      {
        id: 3,
        name: 'Infrastructure',
        description:
          'You immediately get a platform that implements all the possibilities for clients to work with proxy services.',
        icon: 'assets/images/white_label/you_get/infrastructure.svg',
      },
      {
        id: 4,
        name: 'Updates',
        description:
          'We provide constant and free updates of the system core and all elements of the platform.',
        icon: 'assets/images/white_label/you_get/update.svg',
      },
      {
        id: 5,
        name: 'Multilingual',
        description:
          'You can connect ready-made translations of the project into English, Chinese and Spanish to enter new markets.',
        icon: 'assets/images/white_label/you_get/language.svg',
      },
      {
        id: 6,
        name: 'API',
        description:
          'Your clients will have support for all the features of the platform API. We will add new ones upon request.',
        icon: 'assets/images/white_label/you_get/api.svg',
      },
      {
        id: 7,
        name: 'Terms',
        description:
          'Unlike the affiliate program, for White Label partners we give unique conditions for the cost of packages.',
        icon: 'assets/images/white_label/you_get/condition.svg',
      },
      {
        id: 8,
        name: 'Back support',
        description: 'Professional technical support for your business will ensure prompt resolution of any complex issues.',
        icon: 'assets/images/white_label/you_get/support.svg',
      },
    ];
  }
  constructor() { }
}
