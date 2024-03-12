import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [CommonModule, ButtonsComponent, RouterLink]
})
export class HeaderComponent {

}
