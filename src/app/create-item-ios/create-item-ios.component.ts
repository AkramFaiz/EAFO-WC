import { Component, OnInit } from '@angular/core';
import { IosListComponent } from '../ios-list/ios-list.component';
import { IOsdataService } from '../i-osdata.service';

@Component({
  selector: 'app-create-item-ios',
  templateUrl: './create-item-ios.component.html',
  styleUrls: ['./create-item-ios.component.css']
})
export class CreateItemIosComponent implements OnInit {
  imgUpload="assets/iOS2.png";title="";version="";desc="";devBy="";supBy="";verHis="";codeRepo="";
  newItem= {};
  //newWebItem = {};
  constructor(private iOS_ele:IosListComponent,private ios_api:IOsdataService) { }

  ngOnInit() {
  }
  closePU(){
    this.iOS_ele.iVisi = false;
    this.imgUpload="";this.title="";this.version="";this.desc="";this.devBy="";this.supBy="";this.verHis="";this.codeRepo="";
  }
  submitItem(){
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
    this.ios_api.addItem_ios(this.newItem).subscribe(res => {   
      if(typeof(res) != 'object'){
        this.iOS_ele.iVisi = true;
      }else{
        this.iOS_ele.iVisi = false;
      } 
    });
  }
}
