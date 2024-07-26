import { Component} from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PokemonModule,
    RouterOutlet,
    CommonModule,
    RouterLink,
  ],
  templateUrl:'app.component.html',
})

export class AppComponent {}
