import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SocialLoginComponent } from './social-login.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SocialLoginComponent
      }
    ])
  ],
  declarations: [SocialLoginComponent],
  exports: [SocialLoginComponent]
})
export class SocialLoginModule { }
