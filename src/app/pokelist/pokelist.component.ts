import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

import { HttpClient } from '@angular/common/http';
import {SeedPokemonsService, Seed} from '../seed-pokemons.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})

export class PokelistComponent implements OnInit {

  seed: Seed;
  pokemons: string[];
  
  constructor(private pokemonService: SeedPokemonsService) { }

  ngOnInit() {
    this.showSeed();
    console.log(this.pokemons);
  }

  showSeed() {
    this.pokemonService.getSeedResponse().subscribe(resp => {
      const keys = resp.headers.keys();
      this.pokemons = keys.map(key => `${key}: ${resp.headers.get(key)}`)
      this.seed = {... resp.body};
    });
  }
}
