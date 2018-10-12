import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Vaibhav';

  txtColor = 'txtColor';
  bgColor = 'bgColor';

  txtColorObj = {
    txtColor: true,
    bgColor: true
  }
  disabledFlag = true;
  txtColorFlag = true;
  applyColor="green";
  applyColorObj = {
    color: 'pink',
    backgroundColor:'blue'
  }

  constructor() {
    setTimeout(() => {
      this.disabledFlag = false;
      console.log("2s...");
    }, 5000)
  }

  getName(username){
    console.log("GetName Called " + username);
  }
}
