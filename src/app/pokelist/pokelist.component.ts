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

  constructor(private pokemonService: SeedPokemonsService) { }

  ngOnInit() {
    this.showSeed();
    console.log(this.pokemons);
  }

  showSeed() {
    this.pokemonService.getSeedResponse().subscribe(pokemons => this.pokemons = pokemons)
  };
}
