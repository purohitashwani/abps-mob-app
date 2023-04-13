import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SocialSignupComponent } from './social-signup.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: SocialSignupComponent
      }
    ])
  ],
  declarations: [SocialSignupComponent],
  exports: [SocialSignupComponent]
})
export class SocialSignupModule { }
