import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-msg-toast',
  templateUrl: './msg-toast.component.html',
  styleUrls: ['./msg-toast.component.css']
})
export class MsgToastComponent implements OnInit {
  @Input() msg: string;
  //@Input() btnVis: boolean = false;
  @Input() comName: string;
  userResp: string;

  @Output() okBtnClked: EventEmitter<string>= new EventEmitter<string>();

  constructor(private router: Router,private sign_ele:SignupComponent) { }
  ngOnInit() {
  }
  // cancelBtn(){
  //   this.sign_ele.popVisi = false;
  // }
  okBtn(){
    this.sign_ele.popVisi = false;
    if(this.comName == "signIn"){
        this.router.navigateByUrl('/');
    }  
  }
  // userRes(){
  //     this.okBtnClked.emit(this.userResp);
  //     console.log("UR:"+this.userResp);
  // }
}
