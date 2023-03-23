import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageToggleComponent } from './components/language-toggle/language-toggle.component';
import { LeafletMapComponent } from './components/map/map.component';
import { WorkHoursComponent } from './components/work-hours/work-hours.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgLeafletUniversalModule } from 'ng-leaflet-universal';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceOfferComponent } from './components/service-offer/service-offer.component';
import { NgOptimizedImage } from '@angular/common'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LanguageToggleComponent,
    LeafletMapComponent,
    WorkHoursComponent,
    ServiceOfferComponent
  ],
  imports: [
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgLeafletUniversalModule,
    NgOptimizedImage
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
