import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path: '',component:PokelistComponent},
  {path: 'list',component:PokelistComponent},
  {path: 'list/:page',component:PokelistComponent},
  {path: 'getPokemon/:name/:offset',component:PokemonComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
