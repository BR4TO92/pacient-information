import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], model: string): any[]  {
    if (!items) {
      return [];
    }
    if (!model) {
      return items;
    }
    model = model.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(model);
    });
  }

}
