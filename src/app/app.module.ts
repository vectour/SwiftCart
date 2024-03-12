import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ButtonsComponent } from './shared/components/buttons/buttons.component';
import { SubscribeComponent } from './shared/components/subscribe/subscribe.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountrySelectComponent } from './shared/components/country-select/country-select.component';
import { HeaderNavComponent } from './shared/components/header-nav/header-nav.component';
import { CategoriesComponent } from './shared/components/categories/categories.component';
import { DealsComponent } from './shared/components/deals/deals.component';
import { ProductShowcaseComponent } from './shared/components/product-showcase/product-showcase.component';
import { ButtonWhiteComponent } from './shared/components/button-white/button-white.component';
import { QuoteComponent } from './shared/components/quote/quote.component';
import { RecommendedComponent } from './shared/components/recommended/recommended.component';
import { RegionComponent } from './shared/components/region/region.component';
import { ProductFilterComponent } from './shared/components/product-filter/product-filter.component';
import { FilterComponent } from './shared/components/filter/filter.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,

    // StandAlone Components
    HeaderComponent,
    ButtonsComponent,
    CountrySelectComponent,
    HeaderNavComponent,
    FooterComponent,
    SubscribeComponent,
    DealsComponent,
    ProductShowcaseComponent,
    ButtonWhiteComponent,
    QuoteComponent,
    RecommendedComponent, 
    RegionComponent,
    ProductFilterComponent,
    FilterComponent,
    PaginationComponent
   
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
