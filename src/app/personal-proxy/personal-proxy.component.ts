import { Component, OnInit } from '@angular/core';
import { PersonalPrice } from './interfaces/personal-price';
import { PersonalPricesService } from './services/personal-prices.service';

@Component({
  selector: 'xvpn-personal-proxy',
  templateUrl: './personal-proxy.component.html',
  styleUrl: './personal-proxy.component.css'
})
export class PersonalProxyComponent implements OnInit{
  personalPrices: PersonalPrice [] = [];
  constructor(private personalPricesServices: PersonalPricesService) {}
  ngOnInit(): void {
    this.personalPrices = this.personalPricesServices.getPersonalPrices();
  }
}
