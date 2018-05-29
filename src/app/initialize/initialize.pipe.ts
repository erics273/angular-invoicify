import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialize'
})
export class InitializePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const str = value.toString();
    const [first, second] = str.split(/\s+/, 2);
    if (second) {
      return first[0].toUpperCase() + second[0].toUpperCase();
    }
    return first[0].toUpperCase();
  }

}
