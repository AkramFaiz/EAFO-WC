import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  private isUserLoggedIn;
  private username;
  constructor() { 
    this.isUserLoggedIn = false;
  }
  setUserLoggedIn(uname){
    this.username = uname;
    console.log(this.username);
    this.isUserLoggedIn = true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
