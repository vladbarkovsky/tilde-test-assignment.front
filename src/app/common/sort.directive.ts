import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { SortDirection } from '../../../api-client';

@Directive({
  selector: 'th[sortBy]',
  standalone: true,
  host: {
    '[class.asc]': 'direction === sortDirectionEnum.Ascending',
    '[class.desc]': 'direction === sortDirectionEnum.Descending',
    '(click)': 'emitSortEvent()',
  },
})
export class SortDirective {
  @Input() sortBy: string = '';
  @Output() sort = new EventEmitter<SortEvent>();

  sortDirectionEnum = SortDirection;
  direction: SortDirection = SortDirection.Ascending;

  emitSortEvent(): void {
    this.switchDirection();
    this.sort.emit({ sortBy: this.sortBy, direction: this.direction });
  }

  private switchDirection(): void {
    this.direction = this.direction === SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending;
  }
}

export interface SortEvent {
  sortBy: string;
  direction: SortDirection;
}
