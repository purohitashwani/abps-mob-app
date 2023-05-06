import { Component, OnInit } from '@angular/core';
//import { Preferences } from '@capacitor/preferences';

//storage
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-side-menu-header',
  templateUrl: './side-menu-header.component.html',
  styleUrls: ['./side-menu-header.component.scss'],
})
export class SideMenuHeaderComponent  implements OnInit {

  userData: any;
  
  constructor(private myAppStorage: Storage) { }

  ngOnInit() {
    this.getUserData();
  }

  async getUserData() {
    this.myAppStorage.get('user').then((val) => {
      this.userData = val
    });
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
