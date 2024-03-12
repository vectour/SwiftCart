import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountrySelectComponent } from '../country-select/country-select.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [CommonModule, CountrySelectComponent]
})
export class FooterComponent {

}
