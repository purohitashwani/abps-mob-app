import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
//import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: HeaderComponent
    //   }
    // ])
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderdModule {}
