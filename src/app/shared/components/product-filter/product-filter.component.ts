import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { category } from './productfilter';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from '../buttons/buttons.component';
import { ecommerceCategories } from './productfilter';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  standalone: true,
  imports: [CommonModule, ButtonsComponent, FormsModule]
})
export class ProductFilterComponent implements OnInit{

  ngOnInit(): void {
      
  }

  // categories = category;

  ecomCategory = ecommerceCategories;
  categories = Object.keys(ecommerceCategories);

  selectedCategory:string = 'Mobile Accessory';
  selectedbrand: string ;
  selectedFeature: string;

  filterarray = {
    category: 'Mobile Accessory',
    brands: [], 
    features: []
  };


  @Output()
  selectedfilterArray: EventEmitter<{}> = new EventEmitter<{}>

  // Delete Brands 
  deleteBrandElement(array, arrayFeature) {
    const index = array.brands.indexOf(arrayFeature);
        if (index !== -1) {
          array.brands.splice(index, 1);
  }
}

  // Delete Features
  deleteFeatureElement(array, arrayFeature) {
    const index = array.features.indexOf(arrayFeature);
        if (index !== -1) {
          array.features.splice(index, 1);
  }
}

  categorySelect(value: HTMLLIElement) {
      this.selectedCategory = value.firstChild.textContent;
      this.filterarray.category = this.selectedCategory;
      this.filterarray = {category: this.selectedCategory, brands: [], features: []};
      this.selectedfilterArray.emit(this.filterarray);
  }

  // Gets the clicked brand, adds it to the brand type in the filter array and emits the filter array
  brandSelect(value: HTMLLIElement, event) {
      this.selectedbrand = value.firstChild.textContent;
      if(event.target.checked) {
        if (!this.filterarray.brands.includes(this.selectedbrand)) {
          this.filterarray.brands.push(this.selectedbrand);
        }
      }
      else {
        this.deleteBrandElement(this.filterarray, this.selectedbrand);
      }
      this.selectedfilterArray.emit(this.filterarray);
  }


// Gets the clicked feature, adds it to the feature type in the filter array and emits the filter array
  featureSelect(value: HTMLLIElement, event) {
      this.selectedFeature = value.firstChild.textContent;
      if(event.target.checked) {
        if (!this.filterarray.features.includes(this.selectedFeature)) {
          this.filterarray.features.push(this.selectedFeature);
        }
      }
      else {
         this.deleteFeatureElement(this.filterarray, this.selectedFeature);
        }
      this.selectedfilterArray.emit(this.filterarray);
  }

  conditions = ['Any', 'Refurbished', 'Brand New', 'Old Items']

  // Categories dropdown
  showCat:boolean =  true;
  showB:boolean =  true;
  showFeat:boolean =  true;
  showPrice:boolean =  true;
  showConds:boolean =  true;
  showRat:boolean =  true;

  // SeeAll dropdown
  seeCat:boolean = false;
  seeB:boolean = false;
  seeFeat:boolean = false;


  showCategory() {
    this.showCat = !this.showCat
  }
  showBrand() {
    this.showB = !this.showB
  }
  showFeature() {
    this.showFeat = !this.showFeat
  }
  showPriceRange() {
    this.showPrice = !this.showPrice
  }
  showCondition() {
    this.showConds = !this.showConds
  }
  showRatings() {
    this.showRat = !this.showRat
  }
  

  // SEE ALL FLAGS
  seeCategory() {
    this.seeCat = !this.seeCat
  }
  seeBrand() {
    this.seeB = !this.seeB
  }
  seeFeature() {
    this.seeFeat = !this.seeFeat
  }

  minGap = 3000;



  @ViewChild('rangeMin') rangeMin: ElementRef;
  @ViewChild('rangeMax') rangeMax: ElementRef;
  minval: number = 0;
  maxval: number = 10000;

  rangeValues = [this.minval, this.maxval]

  sliderOne() {
    if(parseInt(this.rangeMax.nativeElement.value) - parseInt(this.rangeMin.nativeElement.value) <= this.minGap) {
      this.rangeMin.nativeElement.value = parseInt(this.rangeMax.nativeElement.value) - this.minGap;
      this.minval = this.rangeMin.nativeElement.value
    }
    else{
      this.minval = this.rangeMin.nativeElement.value;
    }
    
  }

  sliderTwo() {
    if(parseInt(this.rangeMax.nativeElement.value) - parseInt(this.rangeMin.nativeElement.value) <= this.minGap) {
      this.rangeMax.nativeElement.value = parseInt(this.rangeMin.nativeElement.value) + this.minGap
      this.maxval = this.rangeMax.nativeElement.value
    }
    else{
      this.maxval = this.rangeMax.nativeElement.value;
    }
  }

  @Output()
  rangeArray: EventEmitter<number[]> = new EventEmitter <number[]>

  emitRange() {
    this.rangeArray.emit(this.rangeValues)
  }
}