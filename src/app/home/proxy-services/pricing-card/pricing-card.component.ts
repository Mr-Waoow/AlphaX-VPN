import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ProxyList } from '../proxy-list';

@Component({
  selector: 'xvpn-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent implements OnInit {
  faCheck = faCheck;
  @Input() proxyList: ProxyList | undefined;
  ngOnInit(): void {}
}
