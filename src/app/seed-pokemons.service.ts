import {Pokemon} from './pokemon';
import {POKEMONS} from './mock-pokemons';

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Seed {
  id: string;
  name: string;
  img: string;
  type: string[];
}

@Injectable({
  providedIn: 'root'
})

export class SeedPokemonsService {

  seedUrl = 'assets/seed.json';

  constructor(private http: HttpClient) { }

  getSeedResponse(): Observable<HttpResponse<Seed>> {
    return this.http.get<Seed>(this.seedUrl, {observe: 'response'});
  }
}