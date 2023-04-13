import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
//import { RouterModule } from '@angular/router';
import { CopyrightFooterComponent } from './copyright-footer.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: CopyrightFooterComponent
    //   }
    // ])
  ],
  declarations: [CopyrightFooterComponent],
  exports: [CopyrightFooterComponent]
})
export class CopyrightFooterModule { }
