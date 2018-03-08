import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  height: number;
  ngOnInit(){
    //document.getElementsByTagName('body')[0].clientHeight == document.getElementsByTagName('html')[0].clientHeight;
  }
}
