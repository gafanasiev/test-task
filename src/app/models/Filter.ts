export class Filter {
  category: string;
  filterObject: any;
  selected: boolean;

  constructor(obj?: any) {
    this.category = obj && obj.category || '';
    this.filterObject = obj && obj.filterObject || null;
    this.category = obj && obj.selected|| false;

  }
}
