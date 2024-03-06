import { Injectable } from '@angular/core';
import { OperatingSystem } from '../interfaces/operating-system';

@Injectable({
  providedIn: 'root'
})
export class OperatingSystemsService {
  getOperatingSystems(): OperatingSystem[] {
    return [
      {
        id: 1,
        name: 'Windows',
        icon: 'faWindows',
        version: '7, 8, 10',
        worksOn: 'V.3.0.9',
      },
      {
        id: 2,
        name: 'Linux',
        icon: 'faLinux',
        version: 'Ubuntu, Debian, Fedora, CentOS, Arch Linux',
        worksOn: 'V.3.0.9',
      },
      {
        id: 3,
        name: 'Mac OS',
        icon: 'faApple',
        version: 'OS X',
        worksOn: 'V.3.0.9',
      },
    ];
  }
  constructor() { }
}
