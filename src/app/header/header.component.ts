import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _route: Router) { }
  notifCount: number = 5;
  ngOnInit() {
  }
  logout(){
    this._route.navigate(['']);
  }
  notifClk(){
    console.log('notification');
    this._route.navigate(['/notify']);
  }
}
