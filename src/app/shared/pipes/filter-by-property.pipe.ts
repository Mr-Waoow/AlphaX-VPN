import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByProperty',
})
export class FilterByPropertyPipe implements PipeTransform {
  transform(value: any[], filterProperty: string, filterValue: any): any[] {
    // Handle potential undefined values for filterProperty or filterValue
    if (!filterProperty || !filterValue) {
      return value;
    }

    return value.filter((item) => item[filterProperty] == filterValue);
  }
}
