import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Pokemon} from './pokelist.model';
import { Observable } from 'rxjs';
import { GLOBAL } from '../../environments/global';

@Injectable()
export class PokelistService{
    private url:string;

    constructor(private _http:HttpClient){
        this.url = GLOBAL.host+GLOBAL.uri;
    }

    getlistPokemon():Observable<any>{
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-type':'application/json'
            })
        };
        console.log(this.url);
        return this._http.get(this.url, httpOptions);
    }
}