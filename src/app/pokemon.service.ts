import { inject, Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
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

  getPokemonById(id: number): Observable<Pokemon> {
    const url = `${this.#POKEMON_API_URL}/${id}`;
    return this.#http.get<Pokemon>(url);
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.#POKEMON_API_URL}/${pokemon.id}`;
    return this.#http.put<Pokemon>(url, pokemon);
  }

  deletePokemon(id: number): Observable<void> {
    const url = `${this.#POKEMON_API_URL}/${id}`;
    return this.#http.delete<void>(url);
  }

  addPokemon(pokemon: Omit<Pokemon,'id'>): Observable<Pokemon> {
    return this.#http.post<Pokemon>(this.#POKEMON_API_URL, pokemon);
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
