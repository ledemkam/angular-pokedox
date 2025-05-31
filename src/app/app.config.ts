import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonProfilComponent } from './pokemon/pokemon-profil/pokemon-profil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonEditComponent } from './pokemon/pokemon-edit/pokemon-edit.component';

const routes: Routes = [
  {
    path: 'pokemons/edit/:id',
    component: PokemonEditComponent,
    title: 'Edition d un  Pokemon',
  },
  {
    path: 'pokemons/:id',
    component: PokemonProfilComponent,
    title: 'Pokemon',
  },
  {
    path: 'pokemons',
    component: PokemonListComponent,
    title: 'Pokedex',
  },
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
