import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';
//import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    logUser:string = '';
  constructor(private _loginService: LoginService, private _actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.logUser = this._loginService.getLoggedInUser();
    console.log('Name:'+ this.logUser);
  }

}
