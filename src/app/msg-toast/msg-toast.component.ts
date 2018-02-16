import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-msg-toast',
  templateUrl: './msg-toast.component.html',
  styleUrls: ['./msg-toast.component.css']
})
export class MsgToastComponent implements OnInit {

  constructor(private router: Router,private sign_ele:SignupComponent) { }

  ngOnInit() {
  }
  closeMsg(){
    this.sign_ele.iVisi = false;
    this.router.navigateByUrl('/');
  }
}
