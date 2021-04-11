import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Pokemon} from '../pokelist/pokelist.model';
import { Observable } from 'rxjs';
import { GLOBAL } from '../../environments/global';

@Injectable()
export class PokemonService{
    private url:string;

    constructor(private _http:HttpClient){
        this.url = GLOBAL.host+GLOBAL.uri_pokemon+"/";
    }

    getPokemon(name:string):Observable<any>{
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-type':'application/json'
            })
        };
        
        return this._http.get(this.url+name, httpOptions);
    }
}