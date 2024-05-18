import { Component, OnInit } from '@angular/core';
import { Flag } from '../../interfaces/flag';
import { SubstringBetweenLetters } from '../../classes/substring-between-letters';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'xvpn-hero-img-flags',
  templateUrl: './hero-img-flags.component.html',
  styleUrl: './hero-img-flags.component.css',
})
export class HeroImgFlagsComponent implements OnInit {
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
