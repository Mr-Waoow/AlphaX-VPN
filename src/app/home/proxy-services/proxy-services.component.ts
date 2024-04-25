import { Component, OnInit } from '@angular/core';
import { ProxyList } from '../../shared/interfaces/proxy-list';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'xvpn-proxy-services',
  templateUrl: './proxy-services.component.html',
  styleUrl: './proxy-services.component.css',
})
export class ProxyServicesComponent implements OnInit {
  proxyLists: ProxyList[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.proxyLists = this.dataService.getProxyList();
  }
}
