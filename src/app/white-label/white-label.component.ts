import { Component, OnInit } from '@angular/core';
import { Feature } from '../shared/interfaces/feature';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'xvpn-white-label',
  templateUrl: './white-label.component.html',
  styleUrl: './white-label.component.css',
})
export class WhiteLabelComponent implements OnInit {
  features: Feature[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.features = this.dataService.getWhiteLabelFeatures();
  }
}
