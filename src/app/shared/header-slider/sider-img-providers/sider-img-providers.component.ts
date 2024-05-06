import { Component, OnInit } from '@angular/core';
import { ProviderTitle } from '../../interfaces/provider-title';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'xvpn-sider-img-providers',
  templateUrl: './sider-img-providers.component.html',
  styleUrl: './sider-img-providers.component.min.css',
})
export class SiderImgProvidersComponent implements OnInit {
  providersTitle: ProviderTitle[] = [];
  assignClass: string[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.providersTitle = this.dataService.getProvidersTitles();
  }
}
