import { Component, OnInit } from '@angular/core';
import {
  FacebookLogin,
  FacebookLoginResponse,
} from '@capacitor-community/facebook-login';
import { CapacitorHttp } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  accessToken: any;

  constructor() {

   }

   async loginWithFacebook() {
    // use hook after platform dom ready
    //await FacebookLogin.initialize({ appId: '209978108333116' });
    const FACEBOOK_PERMISSIONS = [
      'email',
      'user_birthday'
    ];
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    
    if (result.accessToken) {
      // Login successful.
      console.log(`Facebook access token is ${result.accessToken.token}`);
      this.accessToken = result.accessToken;
      this.loadFbUserData();
    }else {
      this.accessToken = 'ashwani';
    }
   }

   loadFbUserData() {
    const url = `https://graph.facebook.com/${this.accessToken.userId}?field=id,name,picture.width(720),birthday,email&access_token=${this.accessToken.token}`;

    const options = {
      url: url,
      headers: { },
      data: { },
    };
    CapacitorHttp.post(options).then(res => {
      let final = JSON.parse(res.data);
      console.log('final.data', final)
    })
   }

  ngOnInit() {
  }

}
