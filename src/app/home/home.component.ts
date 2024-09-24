import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/interfaces/blog';
import { GeneralStatistic } from '../shared/interfaces/general-statistic';
import { PopularRate } from '../shared/interfaces/popular-rate';
import { DataService } from '../shared/services/data.service';
import { ProxyList } from '../shared/interfaces/proxy-list';
import { faShare, faEye, faComment, faLink } from '@fortawesome/free-solid-svg-icons';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ClientData } from '../shared/interfaces/client-data';

@Component({
  selector: 'xvpn-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  //Statistics
  generalStatistics: GeneralStatistic[] = [];
  blogs: Blog[] = [];
  popularRates: PopularRate[] = [];
  //Proxy Services
  proxyLists: ProxyList[] = [];
  //Blog
  faShare = faShare;
  faEye = faEye;
  faComment = faComment;
  //Testimonials
  faLink = faLink;
  clientsData: ClientData[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    //Statistics
    this.dataService.getGeneralStatistics().subscribe({
      next: (data: GeneralStatistic[]) => {
        this.generalStatistics = data;
      },
      error: (error) => console.error('Error fetching general statistics data', error),
    });
    //Blog
    this.dataService.getBlogs().subscribe({
      next: (data: Blog[]) => {
        this.blogs = data;
      },
      error: (error) => console.error('Error fetching blogs data', error),
    });
    //Popular Rates
    this.dataService.getPopularRates().subscribe({
      next: (data: PopularRate[]) => {
        this.popularRates = data;
      },
      error: (error) => console.error('Error fetching popular rates data', error),
    });
    //Proxy Services
    this.dataService.getProxyList().subscribe({
      next: (data: ProxyList[]) => {
        this.proxyLists = data;
      },
      error: (error) => console.error('Error fetching proxy list data', error),
    });
    //Testimonials
   this.dataService.getClientData().subscribe({
      next: (data: ClientData[]) => {
        this.clientsData = data;
      },
      error: (error) => console.error('Error fetching client data', error),
   });
  }
  customOptions: OwlOptions = {
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    nav: false,
    loop: true,
    autoplay: true,
    dots: true,
    navSpeed: 900,
    autoplayTimeout: 4000,
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
  };
}
