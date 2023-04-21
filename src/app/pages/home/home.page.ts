import { Component, OnInit } from '@angular/core';
import {
  FacebookLogin
} from '@capacitor-community/facebook-login';
import { CapacitorHttp } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { Router } from '@angular/router';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  accessToken: any;
  userData: any;
  constructor(private router:Router) {}

  ngOnInit() {
    this.disableScreen();
  }

   async loginWithFacebook() {
    const FACEBOOK_PERMISSIONS = [
      'email',
      'user_birthday'
    ];
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    if (result.accessToken) {
      this.accessToken = result.accessToken
      this.loadFbUserData();
    }
   }

   loadFbUserData() {
    const url = `https://graph.facebook.com/${this.accessToken.userId}?fields=id,name,birthday,last_name,email,gender,hometown,short_name,first_name,picture.width(720)&access_token=${this.accessToken.token}`;
    const options = {url: url};
    CapacitorHttp.post(options).then(res => {
      const userData = JSON.parse(res.data);
      this.userData = {
        name: userData.name
      };
      this.userData = JSON.stringify(this.userData);
      Preferences.set({
        key: 'user',
        value: JSON.stringify(this.userData)
      });
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      console.log(err);
    }) ;
   }

   async disableScreen() {
    console.log('sdfd');
    await PrivacyScreen.disable();
  };

  

}
