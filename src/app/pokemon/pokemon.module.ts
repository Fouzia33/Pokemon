import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';


export const pokemonRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent }, // Déclarer un chemin et associer un composant
  { path: 'pokemon/:id', component: DetailPokemonComponent },
];

@NgModule({
  declarations: [
    BorderCardDirective, PokemonTypeColorPipe, DetailPokemonComponent, ListPokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes),
  ]
})
export class PokemonModule { 
  pokemonList: Pokemon[] = POKEMONS;
  
  ngOnInit() {
    console.table(this.pokemonList);
  }
}
