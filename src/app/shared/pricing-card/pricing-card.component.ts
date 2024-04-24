import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ProxyList } from '../../home/proxy-services/interfaces/proxy-list';
import { PersonalPrice } from '../../personal-proxy/interfaces/personal-price';
import { SharedPrice } from '../../shared-proxy/Interfaces/shared-price';

@Component({
  selector: 'xvpn-pricing-card',
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.css',
})
export class PricingCardComponent implements OnInit {
  faCheck = faCheck;
  @Input() isPricingCard: boolean = false;
  @Input() isShared: boolean = false;
  @Input() inputList: any = [];
  ngOnInit(): void {  }
}
