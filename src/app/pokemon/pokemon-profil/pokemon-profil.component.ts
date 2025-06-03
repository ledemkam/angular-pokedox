import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-pokemon-profil',
  imports: [DatePipe, RouterLink],
  templateUrl: './pokemon-profil.component.html',
  styles: ``,
})
export class PokemonProfilComponent {
  readonly #route = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #PokemonService = inject(PokemonService);

  readonly #pokemondId = Number(this.#route.snapshot.paramMap.get('id'));

  readonly #pokemonResponse = toSignal(
    this.#PokemonService.getPokemonById(this.#pokemondId).pipe(
      map((pokemon) => ({
        value: pokemon,
        error: undefined,
      })),
      catchError((error) =>
        of({
          value: undefined,
          error: error,
        }),
      ),
    ),
  );

  readonly loading = computed(() => this.#pokemonResponse() === undefined);
  readonly error = computed(() => this.#pokemonResponse()?.error);
  readonly pokemon = computed(() => this.#pokemonResponse()?.value);

  deletePokemon() {
    if (this.#pokemondId) {
      this.#PokemonService.deletePokemon(this.#pokemondId).subscribe(() => {
        // Navigate back to the Pokemon list or detail page after successful deletion

        this.#router.navigate(['/pokemons']);
      });
    } else {
      console.error('Pokemon ID is missing for deletion');
    }
  }
}
