import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { POKEMON_LIST } from './pokemon-list.fake';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return POKEMON_LIST;
  }
  getPokemonById(id: number): Pokemon {
    const pokemon = POKEMON_LIST.find((pokemon) => pokemon.id === id);
    if (!pokemon) {
      throw new Error(`Pokemon with id ${id} not found`);
    }

    return pokemon;
  }

  getPokemonTypeList(): string[] {
    return [
      'plante',
      'feu',
      'eau',
      'insecte',
      'normal',
      'electrique',
      'poison',
      'vol',
      'fée',
    ];
  }

 
}
