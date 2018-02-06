import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    name='';x;
  constructor(private _loginService: LoginService, private _actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.x = this._loginService.getUserLoggedIn();
    console.log(this._loginService);
    console.log('Name:'+ this.x);
  }

}
