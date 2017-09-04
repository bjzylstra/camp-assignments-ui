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
  selectedCamp: Camp;
  datePipe: DatePipe;
  updateStartDateText: string;

  constructor() {
  }

  ngOnInit() {
    this.selectedCamp = this.camps.find(currentItem => currentItem.id === this.selectedCampId);
  }

  onSelect(camp: Camp): void {
    this.selectedCamp = camp;
    this.selectedCampId = camp.id;
    this.updateStartDateText = this.datePipe.transform(this.selectedCamp.startDate, 'yyyy-MM-dd');
  }
}
