import { Component, OnInit } from '@angular/core';
import { OfferedService } from '../interfaces/offered-service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'xvpn-offered-services',
  templateUrl: './offered-services.component.html',
  styleUrl: './offered-services.component.css',
})
export class OfferedServicesComponent implements OnInit {
  offeredServices: OfferedService[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.offeredServices = this.dataService.getOfferedService();
  }
}
