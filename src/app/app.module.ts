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
import { BlogComponent } from './home/blog/blog.component';
import { OfferedServicesComponent } from './shared/offered-services/offered-services.component';
import { ProxyServicesComponent } from './home/proxy-services/proxy-services.component';
import { HeaderSliderComponent } from './shared/header-slider/header-slider.component';
import { PricingCardComponent } from './shared/pricing-card/pricing-card.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { SliderImgComponent } from './shared/header-slider/slider-img/slider-img.component';
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
import { SliderImgFlagsComponent } from './shared/header-slider/slider-img-flags/slider-img-flags.component';
import { GetPropertyAndAssignPipe } from './shared/pipes/get-property-and-assign.pipe';
import { BuyServiceComponent } from './personal-proxy/buy-service/buy-service.component';
import { DataCountryProxyDirective } from './personal-proxy/buy-service/directives/data-country-proxy.directive';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectOptionComponent } from './shared/select-option/select-option.component';
import { SharedProxyComponent } from './shared-proxy/shared-proxy.component';
import { MobileProxyComponent } from './mobile-proxy/mobile-proxy.component';
import { SiderImgProvidersComponent } from './shared/header-slider/sider-img-providers/sider-img-providers.component';

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
    GetPropertyAndAssignPipe,
    BuyServiceComponent,
    DataCountryProxyDirective,
    SelectOptionComponent,
    SharedProxyComponent,
    MobileProxyComponent,
    SiderImgProvidersComponent,
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
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
