import { Component } from '@angular/core';
import { productList } from './product-list';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html'
})
export class ListViewComponent {

  selectedProduct;
  selectedCategory:string = 'All Products';

  products = productList;
  listView:boolean;

  toggleView() {
    this.listView = !this.listView
  }

  filterarray = {};

  deleteBrand(index) {
    this.filterarray['brands'].splice(index, 1);
  }

  deleteFeature(index) {
  this.filterarray['features'].splice(index, 1)
}

  clearFilter() {
    this.filterarray = {};
    this.selectedCategory = 'All Products';
    this.products = productList;
  }

  collectedFilter(value: {}){
    this.filterarray = value;
    this.selectedCategory = this.filterarray['category'];
    if (this.selectedCategory === 'All Products') {
      this.products = productList;
    } else {
      this.products = productList.filter((prod) => prod.category === this.selectedCategory);
      if (this.filterarray['brands'].length > 0) {
        this.products = this.products.filter((prod) => this.filterarray['brands'].includes(prod.brands))
      }
      else if (this.filterarray['features'].length > 0) {
        this.products = this.products.filter((prod) => prod.features.some(feature => this.filterarray['features'].includes(feature)));
      }
    }
  }

  emmittedView(value: boolean) {
    this.listView = value
  }
  // products = productList.filter((prod) => prod.category === this.selectedCategory);

  collectRangeArray(value) {
    console.log(value)
  }
}
