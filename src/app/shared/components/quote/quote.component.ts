import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  standalone: true,
  imports: [CommonModule, ButtonsComponent]
})
export class QuoteComponent {

}
