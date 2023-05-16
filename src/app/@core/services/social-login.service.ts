import { Injectable } from '@angular/core';
import {
  FacebookLogin
} from '@capacitor-community/facebook-login';
import { CapacitorHttp } from '@capacitor/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

//storage
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {
  accessToken: any;

  constructor(private router:Router, private myAppStorage: Storage, private loadingCtrl: LoadingController) { }

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
    this.showLoader();
    const url = `https://graph.facebook.com/${this.accessToken.userId}?fields=id,name,birthday,last_name,email,gender,hometown,short_name,first_name,picture.width(720)&access_token=${this.accessToken.token}`;
    const options = {url: url};
    CapacitorHttp.post(options).then(res => {
      const userData = JSON.parse(res.data);
      this.myAppStorage.set('user', userData);
      this.dismissLoader();
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      console.log(err);
    }) ;
   }

// show loader
showLoader() {
  this.loadingCtrl.create({
      message: 'Loading...'
  }).then((response) => {
      response.present();
  });
}


// Dismiss loader
dismissLoader() {
  this.loadingCtrl.dismiss().then((response) => {
      console.log('Loader closed!', response);
  }).catch((err) => {
      console.log('Error occured : ', err);
  });
}
}
