import { Component, OnInit } from '@angular/core';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';
import { SocialLoginService } from '../../@core/services/social-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  accessToken: any;
  userData: any;
  constructor(public socialLogin: SocialLoginService) {}

  ngOnInit() {
    this.disableScreen();
    //this.saveToStorage();
  }
   async disableScreen() {
    //console.log('sdfd');
    await PrivacyScreen.disable();
  };

  loginWithFacebook() {
    this.socialLogin.loginWithFacebook();
  }
}
