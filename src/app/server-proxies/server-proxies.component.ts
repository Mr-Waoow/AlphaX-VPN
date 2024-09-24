import { Component, OnInit } from '@angular/core';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { Feature } from '../shared/interfaces/feature';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'xvpn-server-proxies',
  templateUrl: './server-proxies.component.html',
  styleUrl: './server-proxies.component.css',
})
export class ServerProxiesComponent implements OnInit {
  faBookBookmark = faBookBookmark;
  dataCenterFeatures: Feature[] = [];
  intiated: boolean = false;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getDataCenterFeatures().subscribe({
      next: (features: Feature[]) => {
        this.dataCenterFeatures = features;
      },
      error: (error) =>
        console.error('Error fetching data center features data', error),
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.intiated = true;
    }, 200);
  }
}
