import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ProxyList } from '../interfaces/proxy-list';
import { VpnPeriod } from '../../../vpn-service/interfaces/vpn-period';

@Component({
  selector: 'xvpn-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent implements OnInit {
  faCheck = faCheck;
  proxyList: ProxyList | undefined;
  vpnPeriod: VpnPeriod | undefined;
  @Input() isPricingCard: boolean = true;
  @Input() inputList: any | undefined;
  ngOnInit(): void {
    if (this.isPricingCard) {
      this.proxyList = this.inputList;
    }else {
      this.vpnPeriod = this.inputList;
    }
  }
}
