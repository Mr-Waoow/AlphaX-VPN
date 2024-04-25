import { Component, OnInit } from '@angular/core';
import { Flag } from '../../interfaces/flag';
import { SubstringBetweenLetters } from '../../classes/substring-between-letters';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'xvpn-slider-img-flags',
  templateUrl: './slider-img-flags.component.html',
  styleUrl: './slider-img-flags.component.css',
})
export class SliderImgFlagsComponent implements OnInit {
  flags: Flag[] = [];
  substringBetweenLetter = new SubstringBetweenLetters();
  assignedBoth: string[] = [];
  assignedHuge: string[] = [];
  delayedClass: string = '';
  // assignedHuge: string = '';

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.flags = this.dataService.getFlags();
  }
}
