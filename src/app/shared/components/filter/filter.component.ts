import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class FilterComponent {

  @Input()
  selectedCategory = 'Mobile Accessory';

  displayFlag :boolean  = false;

  sortFlag :boolean  = false;

  @Output()
  changeViewEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  emitViewProp() {
    this.displayFlag = !this.displayFlag
    this.changeViewEmitter.emit(this.displayFlag)
  }


  // listgrid() {
  //   this.displayFlag = !this.displayFlag
  // }

  showSort() {
    this.sortFlag = !this.sortFlag
  }

}
