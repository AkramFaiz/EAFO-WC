import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  private isUserLoggedIn;
  private username;
  constructor(private _http: Http) { 
    this.isUserLoggedIn = false;
  }
  result: any;
  getUser(){
   return this._http.get("/user").map(result => this.result = result.json());
  }
  setUserLoggedIn(uname){
    this.username = uname;
    console.log(this.username);
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
  signUp(item){
    return this._http.post("/user",item).map(result => this.result = result.json());
  }
}
