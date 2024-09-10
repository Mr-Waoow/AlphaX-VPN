import { Component, OnInit } from '@angular/core';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { Feature } from '../shared/interfaces/feature';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'xvpn-server-proxies',
  templateUrl: './server-proxies.component.html',
  styleUrl: './server-proxies.component.css'
})
export class ServerProxiesComponent implements OnInit {
  faBookBookmark = faBookBookmark;
  dataCenterFeatures: Feature[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataCenterFeatures = this.dataService.getDataCenterFeatures();
  }
}
