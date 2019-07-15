import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CoverPictureComponent } from './cover-picture/cover-picture.component';
import { FooterComponent } from './footer/footer.component';
import { ForWhoComponent } from './for-who/for-who.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PricingComponent } from './pricing/pricing.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { QandaComponent } from './qanda/qanda.component';
import { QandaAccordionComponent } from './qanda-accordion/qanda-accordion.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    CoverPictureComponent,
    FooterComponent,
    ForWhoComponent,
    HowItWorksComponent,
    PricingComponent,
    PricingTableComponent,
    QandaComponent,
    QandaAccordionComponent,
    WhatWeDoComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
