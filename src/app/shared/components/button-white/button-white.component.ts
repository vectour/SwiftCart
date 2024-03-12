import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-white',
  templateUrl: './button-white.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class ButtonWhiteComponent {

  @Input() content : string = '';

}
