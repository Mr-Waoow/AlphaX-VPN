import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { NavComponent } from './header/nav/nav.component';
import { BlogComponent } from './home/blog/blog.component';
import { OfferedServicesComponent } from './home/offered-services/offered-services.component';
import { ProxyServicesComponent } from './home/proxy-services/proxy-services.component';
import { HeaderSiderComponent } from './shared/header-sider/header-sider.component';
import { PricingCardComponent } from './home/proxy-services/pricing-card/pricing-card.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { SiderImgComponent } from './shared/header-sider/sider-img/sider-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PreloaderComponent,
    NavComponent,
    BlogComponent,
    OfferedServicesComponent,
    ProxyServicesComponent,
    HeaderSiderComponent,
    PricingCardComponent,
    StatisticsComponent,
    TestimonialsComponent,
    SiderImgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
