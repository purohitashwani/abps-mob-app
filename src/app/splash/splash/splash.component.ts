import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent  implements OnInit {

  constructor(public router: Router, private platform: Platform,) { 
    //this.initializeApp();
    setTimeout(()=> {
      this.router.navigateByUrl('home');
    }, 4000)
  }

  ngOnInit() {}

  initializeApp() {
    this.platform.ready().then(()=> {
      StatusBar.setOverlaysWebView({ overlay: true });
      StatusBar.hide();
    })
  }

}
