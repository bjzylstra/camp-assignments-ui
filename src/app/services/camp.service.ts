import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Camp } from '../camp-objects/camp';

const CAMPS: Camp[] = [
  new Camp(1, 'Junior 1', new Date('July 1, 2017'), new Date('July 5, 2017')),
  new Camp(2, 'Junior 2', new Date('July 7, 2017'), new Date('July 12, 2017'))
  ];

@Injectable()
export class CampService {
  private campsUrl = 'http://localhost:8080/camps';

  constructor(private http: Http) { }

  getCamps(): Promise<Camp []> {
    return this.http.get(this.campsUrl)
               .toPromise()
               .then(response => {
                 // Translation of object straight across is failing so regenerate camps.
                 const campsIn = response.json() as Camp[];
                 const campsOut: Camp[] = new Array(campsIn.length);
                 for (let i = 0; i < campsIn.length; i++) {
                     campsOut[i] = new Camp(campsIn[i].id,
                       campsIn[i].description,
                       campsIn[i].startDate,
                       campsIn[i].endDate);
                  }
                  return campsOut;
                })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
