import { Component, OnInit } from '@angular/core';

//storage
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss'],
})
export class ProfileSettingComponent  implements OnInit {

  userData: any;
  deviceInfo: any;
  batteryInfo: any;
  
  constructor(private myAppStorage: Storage) { }

  ngOnInit() {
    this.getUserData();
  }

  async getUserData() {
    this.myAppStorage.forEach( (value, key, index) => {
      if(key == 'user' ) {
        this.userData = value
      }
      if(key == 'deviceInfo' ) {
        this.deviceInfo = value
      }
      if(key == 'batteryInfo' ) {
        this.batteryInfo = value
        this.batteryInfo.batteryLevel = Math.round(this.batteryInfo.batteryLevel*100);
      }
      console.log('user', this.userData)
      console.log('deviceInfo', this.deviceInfo)
      console.log('batteryInfo', this.batteryInfo)
      // console.log("value", value);
      // console.log("key", key);
      // console.log("Index", index);
  })
    // this.myAppStorage.get('user').then((val) => {
    //   this.userData = val
    // });
    //console.log(user);
    // this.userData = await Preferences.get({ key: 'user' });
    // console.log(typeof(this.userData));
    // console.log(this.userData);
    // this.userData = this.userData.value;
    // console.log(this.userData);
    // console.log(typeof(this.userData));
    // if(this.userData && this.userData.name) {
    //   console.log(this.userData.name)
    // }
    
  };

}
