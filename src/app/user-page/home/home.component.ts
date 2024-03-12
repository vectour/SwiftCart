import { Component } from '@angular/core';
import { navLinks } from './nav-link';
import { dealProduct } from './dealsProduct';
import { homeProduct } from './homeProducts';
import { consumerProduct } from './consumerProducts';
import { recomProd } from './recomProd';
import { demoProd } from './recommendedProducts';
import { countries } from './country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  navLinks = navLinks;
  dealProducts = dealProduct;
  homeProducts = homeProduct;
  consumerProducts = consumerProduct;
  recomProducts = recomProd;
  demoProd = demoProd;
  countries = countries;

}
