import { Component, OnInit } from '@angular/core';
import { SharedPrice } from '../shared/interfaces/shared-price';
import { Methods } from '../shared/classes/methods';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'xvpn-shared-proxy',
  templateUrl: './shared-proxy.component.html',
  styleUrl: './shared-proxy.component.css',
})
export class SharedProxyComponent implements OnInit {
  //Methods
  methods = new Methods();
  sharedPrices: SharedPrice[] = [];
  //Icons
  faCaretDown = faCaretDown;
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.sharedPrices = this.dataService.getSharedPrices();
  }
  openDivTarget(evt: Event, id: string): void {
    this.methods.openable.openDivTarget(evt, id);
  }
}
