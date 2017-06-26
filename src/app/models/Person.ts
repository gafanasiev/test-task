import { Region } from './Region';
export class Person {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  region: Region;
  companyName: string;

  constructor(obj?: any) {
    this.firstName = obj && obj.firstName || '';
    this.lastName = obj && obj.lastName || '';
    this.role = obj && obj.role || '';
    this.region = obj && obj.region || null;
    this.companyName = obj && obj.companyName || '';
  }

  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
