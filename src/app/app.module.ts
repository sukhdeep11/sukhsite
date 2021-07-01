import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhotoSectionComponent } from './components/photo-section/photo-section.component';
import { SliderComponent } from './components/slider/slider.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { PxsuffixPipe } from './pipe/pxsuffix.pipe';
import { SnapComponent } from './components/snap/snap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    HomeComponent,
    FooterComponent,
    PhotoSectionComponent,
    SliderComponent,
    ParallaxComponent,
    PxsuffixPipe,
    SnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
