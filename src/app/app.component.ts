import { Component} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PokemonModule,
    RouterOutlet,
    CommonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl:'app.component.html',
})

export class AppComponent {}
