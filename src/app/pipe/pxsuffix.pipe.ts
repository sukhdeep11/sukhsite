import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pxsuffix'
})
export class PxsuffixPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + 'px';
  }

}
