import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Camp Assignments';
  currentCamp: Camp = {
    id: 1,
    description: 'Junior 2',
    startDate: new Date('July 7, 2017'),
    endDate: new Date('July 12, 2017')
  };
}

export class Camp {
  id: number;
  description: string;
  startDate: Date;
  endDate: Date;
}


