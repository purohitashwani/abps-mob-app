import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SideMenuHeaderComponent } from './side-menu-header.component';
import { SideMenuHeaderRoutingModule } from './side-menu-header-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SideMenuHeaderRoutingModule
  ],
  declarations: [SideMenuHeaderComponent],
  exports: [SideMenuHeaderComponent]
})
export class SideMenuHeaderModule { }
