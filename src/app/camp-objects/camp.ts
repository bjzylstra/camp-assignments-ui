/**
 * Camp object
 */
import { DatePipe } from '@angular/common';

export class Camp {
  id: number;
  description: string;
  startDate: Date;
  endDate: Date;
  private datePipe: DatePipe = new DatePipe('en-US');

  constructor(id: number, description: string, startDate: Date, endDate: Date) {
    this.id = id;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  dateRangeText(): string {
    return this.datePipe.transform(this.startDate, 'mediumDate') + ' - ' +
      this.datePipe.transform(this.endDate, 'mediumDate');
  }
}

