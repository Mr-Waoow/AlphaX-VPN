import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhiteLabelComponent } from './white-label/white-label.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VpnServiceComponent } from './vpn-service/vpn-service.component';
import { PersonalProxyComponent } from './personal-proxy/personal-proxy.component';
import { SharedProxyComponent } from './shared-proxy/shared-proxy.component';
import { MobileProxyComponent } from './mobile-proxy/mobile-proxy.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: 'Home', component: HomeComponent },
  { path: 'FAQ', component: FaqComponent },
  { path: 'Company', component: AboutUsComponent },
  { path: 'About-Us', component: AboutUsComponent },
  { path: 'White-Label', component: WhiteLabelComponent },
  { path: 'Contact-Us', component: ContactUsComponent },
  { path: 'Personal-Proxy', component: PersonalProxyComponent },
  { path: 'Shared-Proxy', component: SharedProxyComponent },
  { path: 'Mobile-Proxy', component: MobileProxyComponent },
  { path: 'VPN-Service', component: VpnServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
