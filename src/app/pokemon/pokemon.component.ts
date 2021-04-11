import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.services';
import { Pokemon } from '../pokelist/pokelist.model';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokemonService]
})
export class PokemonComponent implements OnInit {
  public pokemon : Pokemon;
  public name: string;
  public offset:string
  constructor(public service: PokemonService ,private router:Router, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.forEach(( params:Params) => {
      this.name = params['name'];
      this.offset = params['offset'];
    });
    this.getPokemon();
  }

  public getPokemon(){
    this.service.getPokemon(this.name).subscribe(
      result => {
        this.pokemon = JSON.parse(result.data);
      },
      error => {console.log(error)}
    );

  }

  public back(){
    this.router.navigate(['/list',  this.offset]);
  }

}
