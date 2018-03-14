import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() msg: string;
  @Input() comName: string;
  userResp: string;
  @Output() okBtnClked: EventEmitter<string>= new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  okBtn(e){
    this.userResp = e.currentTarget.value;
    this.userRes();
  }
  cancelBtn(e){
    this.userResp = e.currentTarget.value;
    this.userRes();
  }
  userRes(){
      this.okBtnClked.emit(this.userResp);
      console.log("UR:"+this.userResp);
  }
}
