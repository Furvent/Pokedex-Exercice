import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTypeFilter'
})
export class SearchTypeFilterPipe implements PipeTransform {

  transform(pokemon: any, term: any): any {

    // If no search term
    if (term === undefined) return pokemon;

    return pokemon.filter(function (thisPokemon) {
      for (const type of thisPokemon.type) {
        return type.toLowerCase().includes(term.toLowerCase());
      }
    });
  }
}
