import { Component, inject, signal } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-pokemon-edit',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './pokemon-edit.component.html',
  styles: ``,
})
export class PokemonEditComponent {
  readonly route = inject(ActivatedRoute);
  readonly pokemonService = inject(PokemonService);
  readonly pokemonId = signal(
    Number(this.route.snapshot.paramMap.get('id')),
  ).asReadonly();
  readonly pokemon = signal(
    this.pokemonService.getPokemonById(this.pokemonId()),
  ).asReadonly();

  readonly form = new FormGroup({
    name: new FormControl(this.pokemon().name),
    life: new FormControl(this.pokemon().life),
    damage: new FormControl(this.pokemon().damage),
    types: new FormArray(
      this.pokemon().types.map((type) => new FormControl(type)),
    ),
  });
}
