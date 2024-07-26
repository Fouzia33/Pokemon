import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from "../pokemon-type-color.pipe";
import { BorderCardDirective } from '../border-card.directive';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [PokemonTypeColorPipe, BorderCardDirective, CommonModule],
  templateUrl: './list-pokemon.component.html',
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  goToPokemonList(pokemon: Pokemon) {
    this.router.navigate(['pokemon',pokemon.id]);
  }
}