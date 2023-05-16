import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingCtrl: LoadingController) {}


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

 // Auto hide show loader
 autoLoader() {
  this.loadingCtrl.create({
    message: 'Loader hides after 4 seconds',
    duration: 4000
  }).then((response) => {
    response.present();
    response.onDidDismiss().then((response) => {
      console.log('Loader dismissed', response);
    });
  });
} 

// Custom style + hide on tap loader
customLoader() {
  this.loadingCtrl.create({
    message: 'Loader with custom style',
    duration: 4000,
    cssClass:'loader-css-class',
    backdropDismiss:true
  }).then((res) => {
    res.present();
  });
}
}
