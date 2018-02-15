import { Component, OnInit } from '@angular/core';
import { AndroidListComponent } from '../android-list/android-list.component';
@Component({
  selector: 'app-create-item-and',
  templateUrl: './create-item-and.component.html',
  styleUrls: ['./create-item-and.component.css']
})
export class CreateItemAndComponent implements OnInit {

  constructor(private and_ele:AndroidListComponent) { }

  ngOnInit() {
  }
  closePU(){
    this.and_ele.iVisi = false;
  }
}
