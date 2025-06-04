import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonProfilComponent } from './pokemon/pokemon-profil/pokemon-profil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonEditComponent } from './pokemon/pokemon-edit/pokemon-edit.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthGuard } from '../core/auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { PokemonAddComponent } from './pokemon/pokemon-add/pokemon-add.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Page de Connexion',
  },

  {
    path: 'pokemons',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'add',
        component: PokemonAddComponent,
        title: 'Ajout d un Pokemon',
      },
      {
        path: 'edit/:id',
        component: PokemonEditComponent,
        title: 'Edition d un  Pokemon',
      },
      {
        path: ':id',
        component: PokemonProfilComponent,
        title: 'Pokemon',
      },
      {
        path: '',
        component: PokemonListComponent,
        title: 'Pokedex',
      },
    ],
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
    provideHttpClient(),
  ],
};
