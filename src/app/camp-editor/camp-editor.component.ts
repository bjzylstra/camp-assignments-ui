/*
 * Camp editor component. Manages list of camps and facilitates editing.
 */
import { NgModule } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Camp } from '../camp-objects/camp';
import { DatePipe } from '@angular/common';
import { CampService } from '../services/camp.service';

@Component({
  selector: 'app-camp-editor',
  templateUrl: './camp-editor.component.html',
  providers: [CampService],
  styleUrls: ['./camp-editor.component.css']
})
export class CampEditorComponent implements OnInit {
  title = 'Camps Editor';
  @Input() selectedCampId;
  camps: Camp[];
  datePipe: DatePipe = new DatePipe('en-US');
  selectedCamp: Camp;
  updateDescription: string;
  updateStartDateText: string;
  updateEndDateText: string;

  constructor(private campService: CampService) {
  }

  ngOnInit() {
    this.getCamps();
  }

  getCamps() {
    this.campService.getCamps().then(camps => {
      this.camps = camps;
      console.info(this.camps);
      if (this.camps != null) {
        this.selectedCamp = this.camps.find(currentItem => currentItem.id === this.selectedCampId);
      } else {
        this.selectedCamp = null;
      }
      this.loadEditor(this.selectedCamp);
    });
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
    this.selectedCamp = camp;
    this.selectedCampId = camp.id;
    this.loadEditor(camp);
  }

  saveEditor(): void {
    console.info('Updated date = ' + this.updateStartDateText);
    this.selectedCamp.description = this.updateDescription;
    let utcDate = new Date(this.updateStartDateText);
    this.selectedCamp.startDate = new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
    utcDate = new Date(this.updateEndDateText);
    this.selectedCamp.endDate = new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate());
  }
}
