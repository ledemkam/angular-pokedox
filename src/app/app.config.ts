import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonProfilComponent } from './pokemon/pokemon-profil/pokemon-profil.component';

const routes : Routes = [
  { path: 'pokemons', component: PokemonListComponent  },
  {path: 'pokemons/:id', component: PokemonProfilComponent  },
  {path: '', redirectTo: '/pokemons', pathMatch: 'full'  },
]

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
};
