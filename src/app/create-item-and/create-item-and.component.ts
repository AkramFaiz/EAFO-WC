import { Component, OnInit } from '@angular/core';
import { AndroidListComponent } from '../android-list/android-list.component';
import { AndDataService } from '../and-data.service';

@Component({
  selector: 'app-create-item-and',
  templateUrl: './create-item-and.component.html',
  styleUrls: ['./create-item-and.component.css']
})
export class CreateItemAndComponent implements OnInit {
  imgUpload="assets/iOS2.png";title="";version="";desc="";devBy="";supBy="";verHis="";codeRepo="";
  newItem= {};
  //newWebItem = {};
  constructor(private and_ele:AndroidListComponent,private and_api:AndDataService) { }

  ngOnInit() {
  }
  closePU(){
    this.and_ele.iVisi = false;
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
    this.and_api.addItem_and(this.newItem).subscribe(res => {
      if(typeof(res) != 'object'){
        this.and_ele.iVisi = true;
      }else{
        this.and_ele.iVisi = false;
      }         
    });
  }
}
