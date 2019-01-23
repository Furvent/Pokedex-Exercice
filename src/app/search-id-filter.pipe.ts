import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchIdFilter',
})
export class SearchIdFilterPipe implements PipeTransform {

  transform(pokename: any, term: any): any {

    // If no search term
    if (term === undefined) return pokename;

    term = term.toString();
    if (term === "0") return pokename;
    // To match with pokemon's ID, we must add the good numbe of '0'. If just one digit, add two '0', if two digits only '0', and for more nothing to add.
    term = (term.length === 1) ? ('00' + term)
         : (term.length === 2) ? ('0' + term)
         : term;

    // Je ne comprends pas entièrement les instructions suivantes
    return pokename.filter(function (thisPokemon) {
      return thisPokemon.id.toLowerCase().includes(term.toLowerCase());
    });
  }
}