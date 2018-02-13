import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IOsdataService {
  result : any;
  constructor(private _http: Http) { }

  getList_iOS(){
    return this._http.get("/iOS").map(result => this.result = result.json());
   }

  removeItem_iOS(id){
       return this._http.delete('/iOS/'+ id).map(result => this.result = result.json());
  }
}
