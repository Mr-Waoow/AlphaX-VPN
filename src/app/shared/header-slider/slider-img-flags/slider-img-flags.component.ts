import { Component, OnInit } from '@angular/core';
import { Flag } from './interfaces/flag';
import { FlagsService } from './services/flags.service';
import { SubstringBetweenLetters } from '../../classes/substring-between-letters';

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

  constructor(private flagsService: FlagsService) {}
  ngOnInit(): void {
    this.flags = this.flagsService.getFlags();
  }
}
