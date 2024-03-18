import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ProxyList } from '../../home/proxy-services/interfaces/proxy-list';
import { PersonalPrice } from '../../personal-proxy/interfaces/personal-price';

@Component({
  selector: 'xvpn-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent implements OnInit {
  faCheck = faCheck;
  proxyList: ProxyList | undefined;
  personalPrice: PersonalPrice | undefined;
  @Input() isPricingCard: boolean | undefined;
  @Input() inputList: any | undefined;
  ngOnInit(): void {
    if (!this.isPricingCard) {
      this.proxyList = this.inputList;
    } else {
      this.personalPrice = this.inputList;
    }
  }
}
