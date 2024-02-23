import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { BlogComponent } from './home/blog/blog.component';
import { OfferedServicesComponent } from './home/offered-services/offered-services.component';
import { ProxyServicesComponent } from './home/proxy-services/proxy-services.component';
import { HeaderSliderComponent } from './shared/header-slider/header-slider.component';
import { PricingCardComponent } from './home/proxy-services/pricing-card/pricing-card.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { SliderImgComponent } from './shared/header-slider/slider-img/slider-img.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { CompaniesComponent } from './home/companies/companies.component';

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
