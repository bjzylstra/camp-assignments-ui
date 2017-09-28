import { Injectable } from '@angular/core';
import { Camp } from '../camp-objects/camp';

const CAMPS: Camp[] = [
  new Camp(1, 'Junior 1', new Date('July 1, 2017'), new Date('July 5, 2017')),
  new Camp(2, 'Junior 2', new Date('July 7, 2017'), new Date('July 12, 2017'))
  ];

@Injectable()
export class CampService {

  constructor() { }

  getCamps(): Camp [] {
    return CAMPS;
  }
}
