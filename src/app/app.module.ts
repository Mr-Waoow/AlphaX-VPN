import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { BlogComponent } from './home/blog/blog.component';
import { OfferedServicesComponent } from './shared/offered-services/offered-services.component';
import { ProxyServicesComponent } from './home/proxy-services/proxy-services.component';
import { HeaderSliderComponent } from './header-slider/header-slider.component';
import { PricingCardComponent } from './home/proxy-services/pricing-card/pricing-card.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { SliderImgComponent } from './header-slider/slider-img/slider-img.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { CompaniesComponent } from './home/companies/companies.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhiteLabelComponent } from './white-label/white-label.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VpnServiceComponent } from './vpn-service/vpn-service.component';
import { VpnPriceComponent } from './vpn-service/vpn-price/vpn-price.component';
import { FilterByPropertyPipe } from './shared/pipes/filter-by-property.pipe';
import { PersonalProxyComponent } from './personal-proxy/personal-proxy.component';
import { SliderImgFlagsComponent } from './header-slider/slider-img-flags/slider-img-flags.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PreloaderComponent,
    BlogComponent,
    OfferedServicesComponent,
    ProxyServicesComponent,
    HeaderSliderComponent,
    PricingCardComponent,
    StatisticsComponent,
    TestimonialsComponent,
    SliderImgComponent,
    ScrollTopComponent,
    CompaniesComponent,
    FaqComponent,
    AboutUsComponent,
    WhiteLabelComponent,
    ContactUsComponent,
    VpnServiceComponent,
    VpnPriceComponent,
    FilterByPropertyPipe,
    PersonalProxyComponent,
    SliderImgFlagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
