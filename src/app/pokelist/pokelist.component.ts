import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokelist.model';
import { PokelistService } from './pokelist.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css'],
  providers: [PokelistService]
})
export class PokelistComponent implements OnInit {

  public pokelist : Array<Pokemon>;
  public Pokemon : Pokemon;

  constructor(public service: PokelistService ){ }

  ngOnInit(): void {
      this.getListPokemon();
  }

  public getListPokemon(){

    this.service.getlistPokemon().subscribe(
      result => {this.pokelist = result},
      error => {console.log(error)}
    );

  }

}
