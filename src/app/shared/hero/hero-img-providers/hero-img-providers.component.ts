import { Component, OnInit } from '@angular/core';
import { ProviderTitle } from '../../interfaces/provider-title';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'xvpn-hero-img-providers',
  templateUrl: './hero-img-providers.component.html',
  styleUrl: './hero-img-providers.component.css',
})
export class SiderImgProvidersComponent implements OnInit {
  providersTitle: ProviderTitle[] = [];
  assignClass: string[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.providersTitle = this.dataService.getProvidersTitles();
  }
}
