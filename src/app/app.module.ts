import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LastYearInfoComponent } from './last-year-info/last-year-info.component';
import { ContactComponent } from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SelectButtonModule} from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    LastYearInfoComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SelectButtonModule,
    FormsModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
