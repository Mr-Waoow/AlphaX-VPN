import { Component, OnInit } from '@angular/core';
import { ScrollingFlag } from '../../interfaces/scrolling-flag';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'xvpn-hero-img-scroll',
  templateUrl: './hero-img-scroll.component.html',
  styleUrl: './hero-img-scroll.component.css'
})
export class HeroImgScrollComponent implements OnInit {
  scrollingFlags: ScrollingFlag[] = [];
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getScrollingFlags().subscribe({
      next: (data: ScrollingFlag[]) => {
        this.scrollingFlags = data;
      },
      error: (error) => console.error('Error fetching scrolling flags data', error),
    });
  }
  createRange(number:number){
    // return new Array(number);
    return new Array(number).fill(0)
      .map((n, index) => index + 1);
  }
}
