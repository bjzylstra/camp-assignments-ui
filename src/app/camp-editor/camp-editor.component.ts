/*
 * Camp editor component. Manages list of camps and facilitates editing.
 */
import { NgModule } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Camp } from '../camp-objects/camp';
import { DatePipe } from '@angular/common';

const CAMPS: Camp[] = [
  new Camp(1, 'Junior 2', new Date('July 7, 2017'), new Date('July 12, 2017')),
  new Camp(2, 'Junior 1', new Date('July 1, 2017'), new Date('July 5, 2017'))
];

@Component({
  selector: 'app-camp-editor',
  templateUrl: './camp-editor.component.html',
  styleUrls: ['./camp-editor.component.css']
})
export class CampEditorComponent implements OnInit {
  title = 'Camps Editor';
  @Input() selectedCampId;
  camps = CAMPS;
  datePipe: DatePipe = new DatePipe('en-US');
  updateDescription: string;
  updateStartDateText: string;
  updateEndDateText: string;

  constructor() {
  }

  ngOnInit() {
    this.loadEditor(this.camps.find(currentItem => currentItem.id === this.selectedCampId));
  }

  /**
   * Load the editor section with the specified camp data.
   */
  loadEditor(camp: Camp): void {
    if (camp != null) {
      this.updateDescription = camp.description;
      this.updateStartDateText = this.datePipe.transform(camp.startDate, 'yyyy-MM-dd');
      this.updateEndDateText = this.datePipe.transform(camp.endDate, 'yyyy-MM-dd');
    } else {
      this.updateDescription = '';
      this.updateStartDateText = '';
      this.updateEndDateText = '';
    }
  }

  onSelect(camp: Camp): void {
    this.selectedCampId = camp.id;
    this.loadEditor(camp);
  }

  saveEditor(): void {
    console.info('Updated description = ' + this.updateDescription);
  }
}
