import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { AboutVideoComponentComponent } from './about-video-component/about-video-component.component';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { TeamComponentComponent } from './team-component/team-component.component';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';
import { TestimonialsComponentComponent } from './testimonials-component/testimonials-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { SlideshowComponentComponent } from './header-component/slideshow-component/slideshow-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    HeaderComponentComponent,
    AboutComponentComponent,
    AboutVideoComponentComponent,
    ProductsComponentComponent,
    TeamComponentComponent,
    PortfolioComponentComponent,
    TestimonialsComponentComponent,
    ContactComponentComponent,
    FooterComponentComponent,
    NavigationComponentComponent,
    SlideshowComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
