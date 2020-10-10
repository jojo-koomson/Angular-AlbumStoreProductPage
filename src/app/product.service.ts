import { Injectable } from '@angular/core';
import {http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

//private class
 private _albumUrl ='..assets/album.json';

  constructor(private _http:Http) { }

  getAlbum(id:number){
  	return this._http.get(this._album).map((response) => response.json());
  }
}
