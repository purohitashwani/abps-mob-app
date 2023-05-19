import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Device } from '@capacitor/device';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar, Style } from '@capacitor/status-bar';
import { FacebookLogin } from '@capacitor-community/facebook-login';

//storage
import { Storage } from '@ionic/storage-angular';
import * as cordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

import { TranslateService } from '@ngx-translate/core'

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
    private appStorage: Storage,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('hi');
    this.translate.addLangs(['hi','en']);
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
      // StatusBar.setOverlaysWebView({ overlay: true });
      // StatusBar.hide();
      StatusBar.setStyle({ style: Style.Default });
      StatusBar.setBackgroundColor({color:"#fd771d"})
      FacebookLogin.initialize({ appId: '1923687517995492' });
      this.router.navigateByUrl('splash');
    })
  }
}
