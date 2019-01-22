import {Pokemon} from './pokemon';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getSeedResponse(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.seedUrl);
  }
}
