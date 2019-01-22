import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNameFilter',
})
export class SearchNameFilterPipe implements PipeTransform {

  transform(pokename: any, term: any): any {

    // If no search term
    if (term === undefined) return pokename;
    
    return pokename.filter(function(thisPokemon) {
      return thisPokemon.name.toLowerCase().includes(term.toLowerCase());
    });
  }
}