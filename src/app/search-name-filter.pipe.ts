import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNameFilter'
})
export class SearchNameFilterPipe implements PipeTransform {

  transform(pokemon: any, term: any): any {

    // If no search term
    if (term === undefined) return pokemon;
    
    
    return pokemon.filter(function(thisPokemon) {
      return thisPokemon.name.toLowerCase().includes(term.toLowerCase());
    });

    // Autre test de code pour savoir si le résultat est identique : EDIT : ne fonctionne pas. Pourquoi ? Pipe nécessite une array en retour ?
    // if (pokemon.name.toLowerCase().includes(term.toLowerCase())) return pokemon;
  }
}