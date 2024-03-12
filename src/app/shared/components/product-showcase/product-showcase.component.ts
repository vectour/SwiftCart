import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonWhiteComponent } from '../button-white/button-white.component';

@Component({
  selector: 'app-product-showcase',
  templateUrl: './product-showcase.component.html',
  standalone: true,
  imports: [CommonModule, ButtonWhiteComponent]
})

export class ProductShowcaseComponent {

  @Input() title: string = '';
  @Input() products: any[] = [];
  @Input() btnContent: string = ''
  @Input() bgImage: string = ''

}
