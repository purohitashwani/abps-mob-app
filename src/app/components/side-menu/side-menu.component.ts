import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Share } from '@capacitor/share';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent  implements OnInit {

  constructor(private router: Router, private menuController: MenuController) { }

  ngOnInit() {}


  goTo(page:string) {
    this.menuController.close();
      setTimeout(()=> {
        this.router.navigate([page]);
      },500)
  }

  async shareUs() {
    await Share.share({
      title: 'श्री गणेश -: पुष्करणा परिवार',
      text: ' यह एक ऑनलाइन पुष्करणा मंच है। इसे बनाने का उद्देश्य समाज के सभी सम्मानित सदस्यों को एक परिवार के रूप में जोड़ना और सभी के विचारों को आपस में आदान-प्रदान करना है। ताकि समाज को नई दिशा और ऊर्जा मिले।',
      url: 'https://hi.wikipedia.org/wiki/%E0%A4%AA%E0%A5%81%E0%A4%B7%E0%A5%8D%E0%A4%95%E0%A4%B0%E0%A4%A3%E0%A4%BE',
      dialogTitle: 'सभी पुष्करणा सदस्यो के साथ साँझा करे।',
    });
  }

}
