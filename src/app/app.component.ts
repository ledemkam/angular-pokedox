import { Component, inject, signal } from '@angular/core';

import { Pokemon } from './pokemon.model';
import { PokemonBorderDirective } from './pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  imports: [PokemonBorderDirective,DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly #pokemonService = inject(PokemonService)
  pokemonList = signal(this.#pokemonService.getPokemonTypeList());

size (pokemon: Pokemon) {
  if (pokemon.life <=  15) {
    return "small";
  }
  if (pokemon.life >=  30) {
    return "large";
  }
  return "medium";
};


incrementLife(pokemon : Pokemon) {
  pokemon.life = pokemon.life + 1;
}
decrementLife(pokemon : Pokemon) {
  pokemon.life = pokemon.life - 1;
}
}
