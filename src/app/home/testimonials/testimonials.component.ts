import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ClientData } from './client-data';
import { ClientsService } from './clients.service';

@Component({
  selector: 'xvpn-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  providers: [ClientsService],
})
export class TestimonialsComponent implements OnInit {
  faLink = faLink;
  clientsData: ClientData[] = [];
  constructor(private clientService: ClientsService) {}
  ngOnInit(): void {
    this.clientsData = this.clientService.getClientData();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
  };
}
