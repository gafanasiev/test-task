import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectValues'
})
export class ObjectValuesPipe implements PipeTransform {

  transform(value: any, args?: any): any [] {
    let keys: any[] = Object.keys(value),
      values = [];
    keys.forEach((key: any) => {
      values.push(value[ key ]);
    });
    return values;
  }

}
