import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonProfilComponent } from './pokemon/pokemon-profil/pokemon-profil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes : Routes = [
  { path: 'pokemons', component: PokemonListComponent  },
  {path: 'pokemons/:id', component: PokemonProfilComponent  },
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'  },
  {path: '**', component: PageNotFoundComponent },
]

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
};
