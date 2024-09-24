import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { OfferedServicesComponent } from './shared/offered-services/offered-services.component';
import { HeroComponent } from './shared/hero/hero.component';
import { PricingCardComponent } from './shared/pricing-card/pricing-card.component';
import { HeroImgComponent } from './shared/hero/hero-img/hero-img.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhiteLabelComponent } from './white-label/white-label.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VpnServiceComponent } from './vpn-service/vpn-service.component';
import { VpnPriceComponent } from './vpn-service/vpn-price/vpn-price.component';
import { FilterByPropertyPipe } from './shared/pipes/filter-by-property.pipe';
import { PersonalProxyComponent } from './personal-proxy/personal-proxy.component';
import { HeroImgFlagsComponent } from './shared/hero/hero-img-flags/hero-img-flags.component';
import { GetPropertyAndAssignPipe } from './shared/pipes/get-property-and-assign.pipe';
import { BuyServiceComponent } from './personal-proxy/buy-service/buy-service.component';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectOptionComponent } from './shared/select-option/select-option.component';
import { SharedProxyComponent } from './shared-proxy/shared-proxy.component';
import { MobileProxyComponent } from './mobile-proxy/mobile-proxy.component';
import { SiderImgProvidersComponent } from './shared/hero/hero-img-providers/hero-img-providers.component';
import { ResidentialProxyComponent } from './residential-proxy/residential-proxy.component';
import { ExclusivePlusComponent } from './exclusive-plus/exclusive-plus.component';
import { ServerProxiesComponent } from './server-proxies/server-proxies.component';
import { NewsComponent } from './news/news.component';
import { HeroImgScrollComponent } from './shared/hero/hero-img-scroll/hero-img-scroll.component';
import { PlansTableComponent } from './residential-proxy/plans-table/plans-table.component';
import { DataCenterComponent } from './server-proxies/data-center/data-center.component';
import { CardBuyPlusComponent } from './exclusive-plus/card-buy-plus/card-buy-plus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PreloaderComponent,
    OfferedServicesComponent,
    HeroComponent,
    PricingCardComponent,
    HeroImgComponent,
    ScrollTopComponent,
    FaqComponent,
    AboutUsComponent,
    WhiteLabelComponent,
    ContactUsComponent,
    VpnServiceComponent,
    VpnPriceComponent,
    FilterByPropertyPipe,
    PersonalProxyComponent,
    HeroImgFlagsComponent,
    GetPropertyAndAssignPipe,
    BuyServiceComponent,
    SelectOptionComponent,
    SharedProxyComponent,
    MobileProxyComponent,
    SiderImgProvidersComponent,
    ResidentialProxyComponent,
    ExclusivePlusComponent,
    ServerProxiesComponent,
    NewsComponent,
    HeroImgScrollComponent,
    PlansTableComponent,
    DataCenterComponent,
    CardBuyPlusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CarouselModule,
    FormsModule,
    MatSlideToggleModule,
    MatSelectCountryModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [provideAnimationsAsync(),provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
