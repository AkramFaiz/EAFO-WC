import { Component, OnInit,Input} from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-msg-toast',
  templateUrl: './msg-toast.component.html',
  styleUrls: ['./msg-toast.component.css']
})
export class MsgToastComponent implements OnInit {
  @Input() msg: string;
  @Input() comName: string;
  constructor(private router: Router,private sign_ele:SignupComponent) { }
  ngOnInit() {
  }
  okBtn(){
    this.sign_ele.popVisi = false;
    if(this.comName == "signIn"){
        this.router.navigateByUrl('/');
    }  
  }
}
