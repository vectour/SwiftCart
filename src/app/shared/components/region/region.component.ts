import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class RegionComponent {

  @Input() countries: any[] = [];

}
