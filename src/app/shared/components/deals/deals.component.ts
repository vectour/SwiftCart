import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class DealsComponent {

  dealDate = new Date();

  @Input() prodArray:any[] = []

}
