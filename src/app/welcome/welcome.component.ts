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
  //ht1:number; i:number =0;initialHt:number;
  ngOnInit() {
      this.ht = document.getElementsByTagName('html')[0].clientHeight;
    // if(this.i==0){
    // this.ht1 = document.getElementsByTagName('html')[0].clientHeight;
    // this.initialHt = this.ht1;
    // this.ht = this.ht1;
    // this.i++;
    // }
    // else{
    //   this.ht = this.initialHt;
    // }
  }
}
