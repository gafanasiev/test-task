import { Person } from './Person';
export class CardInfo {
  status: string;
  date: Date;
  expert: Person;
  client: Person;
  projectName: string;

  constructor(obj?: any) {
    this.status = obj && obj.status || '';
    this.date = obj && obj.date || new Date();
    this.expert = obj && obj.expert || null;
    this.client = obj && obj.client || null;
    this.projectName = obj && obj.projectName || '';
  }
}
