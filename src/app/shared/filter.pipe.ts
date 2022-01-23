import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Array<any>, searchText: string, key? : string): Array<any> {
    searchText = searchText.trim().toLowerCase();
    if(searchText === ''){
      return values;
    }
    
    if(key){
      return values.filter(value => value[key].trim().toLowerCase().includes(searchText));
    }else{
      return values.filter(value => value.trim().toLowerCase().includes(searchText));
    }
  }
}