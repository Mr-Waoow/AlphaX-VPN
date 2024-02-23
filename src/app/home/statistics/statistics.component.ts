import { Component, OnInit } from '@angular/core';
import { GeneralStatisticsService } from './general-statistics.service';
import { PopularRatesService } from './popular-rates.service';
import { BlogsService } from '../../shared/blogs.service';
import { PopularRate } from './popular-rate';
import { Blog } from '../../shared/blog';
import { GeneralStatistic } from './general-statistic';

@Component({
  selector: 'xvpn-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
  providers: [GeneralStatisticsService, BlogsService, PopularRatesService],
})
export class StatisticsComponent implements OnInit {
  generalStatistics: GeneralStatistic[] = [];
  blogs: Blog[] = [];
  popularRates: PopularRate[] = [];
  constructor(
    private generalStatisticsService: GeneralStatisticsService,
    private blogsService: BlogsService,
    private popularRatesService: PopularRatesService
  ) {}
  ngOnInit(): void {
    this.generalStatistics =
      this.generalStatisticsService.getGeneralStatistics();
    this.blogs = this.blogsService.getBlogs();
    this.popularRates = this.popularRatesService.getPopularRates();
  }
}
