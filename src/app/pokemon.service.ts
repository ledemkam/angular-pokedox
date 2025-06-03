import { inject, Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { POKEMON_LIST } from './pokemon-list.fake';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  readonly #POKEMON_API_URL = 'http://localhost:3000/pokemons';
  readonly #http = inject(HttpClient);

  getPokemonList(): Observable<Pokemon[]> {
    return this.#http.get<Pokemon[]>(this.#POKEMON_API_URL);
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
