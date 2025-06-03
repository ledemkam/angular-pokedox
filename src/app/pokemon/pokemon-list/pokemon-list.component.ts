import { inject, computed, Component, signal } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { Pokemon } from '../../pokemon.model';
import { PokemonBorderDirective } from '../../pokemon-border.directive';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonBorderDirective, DatePipe, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styles: `
    .pokemond-card {
      cursor: pointer;
    }
  `,
})
export class PokemonListComponent {
  readonly #pokemonService = inject(PokemonService);
  readonly pokemonList = toSignal(this.#pokemonService.getPokemonList(), {
    initialValue: [],
  });
  readonly searchTerm = signal('');

  readonly pokemonListFiltered = computed(() => {
    const searchTerm = this.searchTerm();
    return this.pokemonList().filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
    );
  });

  size(pokemon: Pokemon) {
    if (pokemon.life <= 15) {
      return 'small';
    }
    if (pokemon.life >= 30) {
      return 'large';
    }
    return 'medium';
  }
}
