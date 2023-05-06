import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Device } from '@capacitor/device';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';

//storage
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private appStorage: Storage
  ) {
    this.init();
    this.initializeApp();
  }


  async init() {
    await this.appStorage.defineDriver(cordovaSQLiteDriver);
    await this.appStorage.create();
    const deviceInfo = await Device.getInfo();
    this.appStorage.set('deviceInfo', deviceInfo);
    const batteryInfo = await Device.getBatteryInfo();
    this.appStorage.set('batteryInfo', batteryInfo);
  }


   initializeApp() {
    this.platform.ready().then(()=> {
      StatusBar.setStyle({ style: Style.Default });
      this.router.navigateByUrl('splash');
    })
  }
}
