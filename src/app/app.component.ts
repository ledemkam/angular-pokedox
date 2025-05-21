import { Component, signal } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
pokemonList = signal(POKEMON_LIST)

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
