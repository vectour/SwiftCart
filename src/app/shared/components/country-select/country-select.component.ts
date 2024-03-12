import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { countrySelect } from './countrySelect';

@Component({
  selector: 'app-country-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-select.component.html'
})
export class CountrySelectComponent {

  @Input() direction:string = '';
  @Input() absoluteTop:number = 0;

  countrySelect:any[] = countrySelect;

  selectedCountrySource:string = "assets/images/country/US.png";
  selectedCountryAlt:string = "alt1";
  selectedCountryName:string = "English";
  selectedCountryColor:number = 0;


  dropdown: boolean = false;

  dropdownOpen() {
    if(window.onclick) {
      this.dropdown = false;

    }
    else {
      this.dropdown = !this.dropdown


    }

  }

  changeCountry(value:any) {
    this.selectedCountryAlt = value.alt;
    this.selectedCountryName = value.countryName;
    this.selectedCountrySource = value.src;
    this.selectedCountryColor = value.id
  }

}
