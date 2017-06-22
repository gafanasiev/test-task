export class Filter {
  static instanceCount: number = 0;
  id: number;
  name: string;

  constructor(obj?: any) {
    this.id = Filter.instanceCount++;
    this.name = obj && obj.name || '';
  }
}
