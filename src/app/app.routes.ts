import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { pokemonRoutes } from './pokemon/pokemon.module';

export const routes: Routes = [
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, // Rediriger l'utilisateur vers la page /pokemons par défaut
    ...pokemonRoutes,
    { path: '**', component: PageNotFoundComponent } // Rediriger l'utilisateur vers la page /pokemons si le chemin n'est pas reconnu
];
