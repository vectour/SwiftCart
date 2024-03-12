import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CountrySelectComponent } from '../country-select/country-select.component';


@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  standalone: true,
  imports: [CommonModule, CountrySelectComponent]
})
export class HeaderNavComponent {

}
