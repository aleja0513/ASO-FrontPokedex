import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Pokemon} from './pokelist.model';
import { Observable } from 'rxjs';
import { GLOBAL } from '../../environments/global';

@Injectable()
export class PokelistService{
    private url:string;

    constructor(private _http:HttpClient){
        this.url = GLOBAL.host+GLOBAL.uri;
    }

    getlistPokemon(limit:string, offset:string):Observable<any>{
        const httpOptions = {
            headers : new HttpHeaders({
                'Content-type':'application/json'
            }),
            params : new HttpParams().append('limit', limit).append('offSet',offset)
        };
        
        return this._http.get(this.url, httpOptions);
    }
}