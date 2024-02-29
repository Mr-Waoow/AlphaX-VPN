import { Component, OnInit } from '@angular/core';
import { OfferedServicesService } from './offered-services.service';
import { OfferedService } from './offered-service';

@Component({
  selector: 'xvpn-offered-services',
  templateUrl: './offered-services.component.html',
  styleUrl: './offered-services.component.css',
  providers: [OfferedServicesService],
})
export class OfferedServicesComponent implements OnInit {
  offeredServices: OfferedService[] = [];
  constructor(private offeredServicesService: OfferedServicesService) {}
  ngOnInit(): void {
    this.offeredServices = this.offeredServicesService.getOfferedService();
  }
}
