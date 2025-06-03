import { Component, inject} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pokemon-profil',
  imports: [DatePipe, RouterLink],
  templateUrl: './pokemon-profil.component.html',
  styles: ``,
})
export class PokemonProfilComponent {
  readonly #route = inject(ActivatedRoute);
  readonly #PokemonService = inject(PokemonService);

  readonly #pokemondId = Number(this.#route.snapshot.paramMap.get('id'));

  readonly pokemon = toSignal(
    this.#PokemonService.getPokemonById(this.#pokemondId),
  );
}
