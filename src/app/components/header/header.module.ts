import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
//import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule
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
