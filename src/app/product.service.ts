import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Album} from './album';
import {observable} from 'rxjs/observable'

@Injectable()
export class ProductService {

 private _albumUrl ='../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id:number): obervable<Album>{
  	return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  	return 
  }
}
