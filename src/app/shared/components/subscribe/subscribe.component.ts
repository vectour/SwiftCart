import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  standalone: true,
  imports: [CommonModule,ButtonsComponent]
})
export class SubscribeComponent {

}
