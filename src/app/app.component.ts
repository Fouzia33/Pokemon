import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, CommonModule, BorderCardDirective, PokemonTypeColorPipe, DetailPokemonComponent, ListPokemonComponent, RouterLink],
  templateUrl:'app.component.html',
  styles: [],
})

export class AppComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  
  ngOnInit() {
    console.table(this.pokemonList);
  }

}
