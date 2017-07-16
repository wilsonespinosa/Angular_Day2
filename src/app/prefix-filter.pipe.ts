import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefixFilter'
})
export class PrefixFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const actualStr = value.split('/');
    return actualStr[actualStr.length - 1];
  }

}
