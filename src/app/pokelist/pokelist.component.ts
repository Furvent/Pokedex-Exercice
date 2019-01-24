import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

import { SeedPokemonsService, Seed } from '../seed-pokemons.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})

export class PokelistComponent implements OnInit {

  seed: Seed;
  pokemons: Pokemon[];
  // Would be better to catch all type of pokemons, and fill values dynamically.
  types: String[] = ["Grass", "Poison", "Fire", "Flying", "Water", "Bug", "Normal", "Fighting", "Rock", "Steel", "Ice", "Ghost", "Dragon", "Psychic", "Ground", "Electric"];

  constructor(private pokemonService: SeedPokemonsService) { };

  ngOnInit() {
    this.showSeed();
    console.log(this.pokemons);
  };

  showSeed() {
    this.pokemonService.getSeedResponse().subscribe(pokemons => this.pokemons = pokemons)
  };
}
