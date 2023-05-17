import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Geolocation } from '@capacitor/geolocation';

//storage
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  isModalOpen = false;
  lan: any;

  constructor(private translateService: TranslateService, private myAppStorage: Storage) {
    this.lan = this.translateService.getDefaultLang();
   }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  onLanguageChange() {
      //console.log(e.target.value)
      //this.lan = e.target.value;
      console.log(this.lan);
      this.translateService.use(this.lan?this.lan:"en");
      // setTimeout(()=> {
      //   this.setOpen(false);
      // }, 400)
  }

  async getGeoLocation() {
    //const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current position:', coordinates);
      this.myAppStorage.set('location', coordinates);
   // };
  }

}
