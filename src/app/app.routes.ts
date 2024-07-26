import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent }, // Déclarer un chemin et associer un composant
    { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' }, // Rediriger l'utilisateur vers la page /pokemons par défaut
    { path: '**', component: PageNotFoundComponent } // Rediriger l'utilisateur vers la page /pokemons si le chemin n'est pas reconnu

];
