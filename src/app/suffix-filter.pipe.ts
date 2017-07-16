import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffixFilter'
})
export class SuffixFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   const actualStr = value.split(' ')[0];
   return actualStr;
  }

}
