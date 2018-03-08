import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  title = 'Ericsson App Factory Outlet';
  constructor(private _router: Router) { }
  ht:number;
  ngOnInit() {
    this.ht = document.getElementsByTagName('html')[0].clientHeight;
  }
}
