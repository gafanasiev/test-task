export class Region {
  id: number;
  name: string;

  constructor(obj?: any) {
    this.name = obj && obj.name || '';
  }
}
