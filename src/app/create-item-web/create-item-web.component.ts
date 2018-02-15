import { Component, OnInit } from '@angular/core';
import { WebListComponent } from '../web-list/web-list.component';
import { WebDataService } from '../web-data.service';

@Component({
  selector: 'app-create-item-web',
  templateUrl: './create-item-web.component.html',
  styleUrls: ['./create-item-web.component.css']
})
export class CreateItemWebComponent implements OnInit {
  imgUpload="assets/iOS2.png";title="";version="";desc="";devBy="";supBy="";verHis="";codeRepo="";
  newItem= {};
  //newWebItem = {};
  constructor(private web_ele:WebListComponent,private web_api:WebDataService) { }
  ngOnInit() {
  }
  closePU(){
    this.web_ele.iVisi = false;
    this.imgUpload="";this.title="";this.version="";this.desc="";this.devBy="";this.supBy="";this.verHis="";this.codeRepo="";
  }
  submitItem(){
    //console.log(this.imgUpload+this.title+this.version+this.desc+this.devBy+this.supBy+this.verHis+this.codeRepo);
    this.newItem=
    {
      'Icon': this.imgUpload,
      'Title': this.title,
      'Desc': this.desc,
      'Version': this.version,
      'DevelopedBy': this.devBy,
      'SupportedBy': this.supBy,
      'VersionsHistory': this.verHis,
      'CodeRepository': this.codeRepo
    }
    console.log(this.newItem);
    this.web_api.addItem_web(this.newItem).subscribe(res => {
      if(typeof(res) != 'object'){
        this.web_ele.iVisi = true;
      }else{
        this.web_ele.iVisi = false;
      }            
    });
  }
}
