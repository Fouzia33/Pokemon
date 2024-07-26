import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, BorderCardDirective, PokemonTypeColorPipe],
  templateUrl:'app.component.html',
  styles: [],
})

export class AppComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemonName:string ) {
    const name = pokemonName;
    const pokemon: Pokemon | undefined = this.pokemonList.find(p => p.name.toLowerCase() === name.toLowerCase());
    if(pokemon) { 
      this.pokemonSelected = pokemon; 
    } 
    else {
      this.pokemonSelected = pokemon; 
    }
  }
}
