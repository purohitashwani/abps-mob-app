import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

  swiperModules = [IonicSlides];

  constructor(private router: Router) { }

  ngOnInit() {}

  logout() {
    this.router.navigate(['/login']);
  }

}
