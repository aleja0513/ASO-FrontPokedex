import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from './pokelist.model';
import { PokelistService } from './pokelist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css'],
  providers: [PokelistService]
})
export class PokelistComponent implements OnInit {

  public pokelist : Array<Pokemon>;
  
  page:number=0;
  size:number=20;
  length:number;
  disabled:boolean;

  constructor(public service: PokelistService, private router:Router ){ }

  ngOnInit(): void {
      this.disabled = true;
      this.getListPokemon({pageIndex:this.page, pageSize:this.size});
  }

  public getListPokemon(obj){

    this.service.getlistPokemon(obj.pageSize, obj.pageIndex * obj.pageSize+'').subscribe(
      result => {this.pokelist = result.list; this.length = result.count; this.disabled = false},
      error => {console.log(error)}
    );

  }

  public getPokemonDetail(obj){
    this.router.navigate(['/getPokemon/'+obj.name]);
  }



}
