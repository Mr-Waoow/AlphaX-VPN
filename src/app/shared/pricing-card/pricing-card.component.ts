import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ProxyList } from '../../home/proxy-services/proxy-list';
import { VpnPeriod } from '../../vpn-service/vpn-period';

@Component({
  selector: 'xvpn-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent implements OnInit {
  faCheck = faCheck;
  countryList: string[] = ['United States', 'Netherlands', 'Russia'];
  proxyList: ProxyList | undefined;
  vpnPeriod: VpnPeriod | undefined;
  @Input() isPricingCard: boolean = true;
  @Input() inputList: any | undefined;
  ngOnInit(): void {
    if (this.isPricingCard) {
      this.proxyList = this.inputList;
    }else {
      this.vpnPeriod = this.inputList;
      if (this.vpnPeriod) {
        this.countryList = this.vpnPeriod.counteis;
      }
    }
  }
}
