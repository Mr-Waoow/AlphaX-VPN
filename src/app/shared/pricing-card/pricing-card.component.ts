import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { ProxyList } from '../interfaces/proxy-list';
import { PersonalPrice } from '../interfaces/personal-price';
import { SharedPrice } from '../interfaces/shared-price';

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
