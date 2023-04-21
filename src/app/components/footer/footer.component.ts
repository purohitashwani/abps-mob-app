import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  constructor(private router: Router, private menuController: MenuController) { }

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/dashboard']);
  }

  workInProgress() {
    this.router.navigate(['/work-in-progress']);
  }

  openMenu() {
    this.menuController.enable(true).then(() => {
      this.menuController.open();
    });
  }

}
