import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';
import { HomeComponent } from './home/home.component';

// StandAlone Components
import { CountrySelectComponent } from '../shared/components/country-select/country-select.component';
import { ButtonsComponent } from '../shared/components/buttons/buttons.component';
import { HeaderNavComponent } from '../shared/components/header-nav/header-nav.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SubscribeComponent } from '../shared/components/subscribe/subscribe.component';
import { DealsComponent } from '../shared/components/deals/deals.component';
import { ProductShowcaseComponent } from '../shared/components/product-showcase/product-showcase.component';
import { ButtonWhiteComponent } from '../shared/components/button-white/button-white.component';
import { QuoteComponent } from '../shared/components/quote/quote.component';
import { RecommendedComponent } from '../shared/components/recommended/recommended.component';
import { RegionComponent } from '../shared/components/region/region.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ProductFilterComponent } from '../shared/components/product-filter/product-filter.component';
import { FilterComponent } from '../shared/components/filter/filter.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserPageComponent,
    HomeComponent,
    ListViewComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    // FormsModule,

    // StandAlone Components
    CountrySelectComponent,
    ButtonsComponent,
    HeaderNavComponent,
    HeaderComponent,
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

  ]
})
export class UserPageModule { }
