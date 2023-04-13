import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from './side-menu.component';
import {SideMenuRoutingModule } from './side-menu-routing.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SideMenuRoutingModule
  ],
  declarations: [SideMenuComponent],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
