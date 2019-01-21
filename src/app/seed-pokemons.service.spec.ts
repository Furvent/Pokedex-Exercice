import { TestBed } from '@angular/core/testing';

import { SeedPokemonsService } from './seed-pokemons.service';

describe('SeedPokemonsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeedPokemonsService = TestBed.get(SeedPokemonsService);
    expect(service).toBeTruthy();
  });
});
