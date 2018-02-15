import { Component, OnInit } from '@angular/core';
import { IosListComponent } from '../ios-list/ios-list.component';
@Component({
  selector: 'app-create-item-ios',
  templateUrl: './create-item-ios.component.html',
  styleUrls: ['./create-item-ios.component.css']
})
export class CreateItemIosComponent implements OnInit {

  constructor(private iOS_ele:IosListComponent) { }

  ngOnInit() {
  }
  closePU(){
    this.iOS_ele.iVisi = false;
  }
}
