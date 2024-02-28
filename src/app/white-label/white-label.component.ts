import { Component, OnInit } from '@angular/core';
import { Feature } from './feature';
import { FeaturesService } from './features.service';

@Component({
  selector: 'xvpn-white-label',
  templateUrl: './white-label.component.html',
  styleUrl: './white-label.component.css'
})
export class WhiteLabelComponent implements OnInit{
  features: Feature[] = []
  constructor(private featuresService: FeaturesService) { }
  ngOnInit(): void {
    this.features = this.featuresService.getFeatures();
  }
}
