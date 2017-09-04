/**
 * Camp object
 */
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

