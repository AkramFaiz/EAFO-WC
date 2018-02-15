import { Component, OnInit } from '@angular/core';
import { HybListComponent } from '../hyb-list/hyb-list.component';
import { HybdataService } from '../hybdata.service';

@Component({
  selector: 'app-create-item-hyb',
  templateUrl: './create-item-hyb.component.html',
  styleUrls: ['./create-item-hyb.component.css']
})
export class CreateItemHybComponent implements OnInit {
  imgUpload="assets/iOS2.png";title="";version="";desc="";devBy="";supBy="";verHis="";codeRepo="";
  newItem= {};
  //newWebItem = {};
  constructor(private hyb_ele: HybListComponent,private hyb_api:HybdataService) { }

  ngOnInit() {
  }

  closePU(){
    this.hyb_ele.iVisi = false;
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
    this.hyb_api.addItem_hyb(this.newItem).subscribe(res => {
      if(typeof(res) != 'object'){
        this.hyb_ele.iVisi = true;
      }else{
        this.hyb_ele.iVisi = false;
      }           
    });
  }
}
