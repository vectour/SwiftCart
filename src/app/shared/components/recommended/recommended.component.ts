import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class RecommendedComponent {

  @Input() products: any[] = [];

}
