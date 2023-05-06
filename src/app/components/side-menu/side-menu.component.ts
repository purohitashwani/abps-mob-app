import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';


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

}
