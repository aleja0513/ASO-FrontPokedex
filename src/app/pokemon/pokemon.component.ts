import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.services';
import { Pokemon } from '../pokelist/pokelist.model';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {
  public pokemon : Pokemon;
  public name: string;
  constructor(public service: PokemonService , private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.forEach(( params:Params) => {
      this.name = params['name'];
    });
    this.getPokemon();
  }

  public getPokemon(){

    console.log("ingresa");

    this.service.getPokemon(this.name).subscribe(
      result => {
        console.log(result);
        this.pokemon = result
      },
      error => {console.log(error)}
    );

  }

}
