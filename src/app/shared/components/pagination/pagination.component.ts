import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule]
})
export class PaginationComponent {

}
