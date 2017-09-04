import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

export class Camp {
  id: number;
  description: string;
  startDate: Date;
  endDate: Date;
  constructor(id: number, description: string, startDate: Date, endDate: Date) {
    this.id = id;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
  dateRangeText(): string {
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    return this.startDate.toLocaleDateString('EN-US', options) + ' - ' +
      this.endDate.toLocaleDateString('EN-US', options);
  }
}

const CAMPS: Camp[] = [
  new Camp(1, 'Junior 2', new Date('July 7, 2017'), new Date('July 12, 2017')),
  new Camp(2, 'Junior 1', new Date('July 1, 2017'), new Date('July 5, 2017'))
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Camp Assignments';
  selectedCampId = 3;
  camps = CAMPS;
  selectedCamp: Camp;
  constructor() {
    this.selectedCamp = this.camps.find(currentItem => currentItem.id === this.selectedCampId);
  }
  onSelect(camp: Camp): void {
    this.selectedCamp = camp;
    this.selectedCampId = camp.id;
  }
}
