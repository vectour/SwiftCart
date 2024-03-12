import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ButtonsComponent {

  @Input() content:string = '';
}
