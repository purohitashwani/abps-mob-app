import { Component, OnInit } from '@angular/core';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  enableScreen = async () => {
    console.log('sdfd');
    await PrivacyScreen.enable();
  };

  disableScreen = async () => {
    console.log('sdfd');
    await PrivacyScreen.disable();
  };

}
