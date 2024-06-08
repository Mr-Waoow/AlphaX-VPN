import { Component } from '@angular/core';
import { faList, faGrip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'xvpn-data-center',
  templateUrl: './data-center.component.html',
  styleUrl: './data-center.component.css'
})
export class DataCenterComponent {
  faList = faList;
  faGrip = faGrip;
}
