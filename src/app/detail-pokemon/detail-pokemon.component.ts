import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-pokemon',
  standalone: true,
  imports: [PokemonTypeColorPipe,CommonModule],
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent {

  pokemonList: Pokemon[];
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    this.pokemon = this.pokemonList.find(pokemon => pokemon.id === Number(pokemonId));
     }

  goToPokemonList() {
    window.history.back();
  }
}
