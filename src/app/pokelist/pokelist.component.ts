import { Component, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from './pokelist.model';
import { PokelistService } from './pokelist.service';
import { Router,ActivatedRoute, Params } from '@angular/router';

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
  IsWait:boolean=true;

  constructor(public service: PokelistService, private router:Router, private _route:ActivatedRoute ){ }

  ngOnInit(): void {
      this._route.params.forEach(( params:Params) => {
        if(params['page']==='undefined'){
          this.page = params['page'];
      }
        
      });
      
      this.disabled = true;
      this.getListPokemon({pageIndex:this.page, pageSize:this.size});
  }

  public getListPokemon(obj){
    this.IsWait = true;
    this.page = obj.pageIndex;
    this.service.getlistPokemon(obj.pageSize, obj.pageIndex * obj.pageSize+'').subscribe(
      result => { this.pokelist = JSON.parse(result.data).list; 
                  this.length = JSON.parse(result.data).count; 
                  this.disabled = false;
                  this.IsWait = false;
              },
      error => {console.log(error); this.IsWait = false;}
    );

  }

  public getPokemonDetail(obj){
    this.router.navigate(['/getPokemon', obj.name , this.page]);
  }



}
