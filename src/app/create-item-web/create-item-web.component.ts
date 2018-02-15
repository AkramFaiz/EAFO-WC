import { Component, OnInit } from '@angular/core';
import { WebListComponent } from '../web-list/web-list.component';
@Component({
  selector: 'app-create-item-web',
  templateUrl: './create-item-web.component.html',
  styleUrls: ['./create-item-web.component.css']
})
export class CreateItemWebComponent implements OnInit {

  constructor(private web_ele:WebListComponent) { }

  ngOnInit() {
  }

  closePU(){
    this.web_ele.iVisi = false;
  }

}
