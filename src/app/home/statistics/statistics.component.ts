import { Component, OnInit } from '@angular/core';
import { PopularRate } from '../../shared/interfaces/popular-rate';
import { Blog } from '../../shared/interfaces/blog';
import { GeneralStatistic } from '../../shared/interfaces/general-statistic';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'xvpn-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent implements OnInit {
  generalStatistics: GeneralStatistic[] = [];
  blogs: Blog[] = [];
  popularRates: PopularRate[] = [];
  constructor(
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.generalStatistics = this.dataService.getGeneralStatistics();
    this.blogs = this.dataService.getBlogs();
    this.popularRates = this.dataService.getPopularRates();
  }
}
