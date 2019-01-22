import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchIdFilter',
})
export class SearchIdFilterPipe implements PipeTransform {

  transform(pokename: any, term: any): any {

    // If no search term
    if (term === undefined) return pokename;

    console.log("term before toString: " + term);
    term = term.toString();
    console.log("term after toString: " + term);
    // To match with pokemon's ID, we must add the good numbe of '0'. If just one digit, add two '0', if two digits only '0', and for more nothing to add.
    term = (term.length === 1) ? ('00' + term)
         : (term.length === 2) ? ('0' + term)
         : term;
    console.log("term after modif toString: " + term);
    return pokename.filter(function (thisPokemon) {
      return thisPokemon.id.toLowerCase().includes(term.toLowerCase());
    });
  }
}