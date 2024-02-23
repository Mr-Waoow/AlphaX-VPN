import { Component, OnInit } from '@angular/core';
import { ProxyDataService } from './proxy-data.service';
import { ProxyList } from './proxy-list';

@Component({
  selector: 'xvpn-proxy-services',
  templateUrl: './proxy-services.component.html',
  styleUrl: './proxy-services.component.css',
  providers: [ProxyDataService],
})
export class ProxyServicesComponent implements OnInit {
  proxyLists: ProxyList[] = [];
  constructor(private proxyDataService: ProxyDataService) {}
  ngOnInit(): void {
    this.proxyLists = this.proxyDataService.getProxyList();
  }
}
