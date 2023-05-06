import { Component, OnInit } from '@angular/core';
import {
  FacebookLogin
} from '@capacitor-community/facebook-login';
import { CapacitorHttp } from '@capacitor/core';
import { Router } from '@angular/router';
import { PrivacyScreen } from '@capacitor-community/privacy-screen';

//storage
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  accessToken: any;
  userData: any;
  constructor(private router:Router, private myAppStorage: Storage) {}

  ngOnInit() {
    this.disableScreen();
    //this.saveToStorage();
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
      this.myAppStorage.set('user', userData);
      // this.userData = {
      //   name: userData.name
      // };
      // this.userData = JSON.stringify(this.userData);
      // Preferences.set({
      //   key: 'user',
      //   value: JSON.stringify(this.userData)
      // });
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      console.log(err);
    }) ;
   }

   async disableScreen() {
    //console.log('sdfd');
    await PrivacyScreen.disable();
  };

  // saveToStorage() {
  //  const testData = {
  //     name: 'ashwani', 
  //     age: 23,
  //     city: 'bikaner'
  //   }

  //   this.myAppStorage.set('user', testData);
  // }

  

}
