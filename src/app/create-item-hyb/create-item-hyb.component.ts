import { Component, OnInit } from '@angular/core';
import { HybListComponent } from '../hyb-list/hyb-list.component';
@Component({
  selector: 'app-create-item-hyb',
  templateUrl: './create-item-hyb.component.html',
  styleUrls: ['./create-item-hyb.component.css']
})
export class CreateItemHybComponent implements OnInit {

  constructor(private hyb_ele: HybListComponent) { }

  ngOnInit() {
  }

  closePU(){
    this.hyb_ele.iVisi = false;
  }

}
