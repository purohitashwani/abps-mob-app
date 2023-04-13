import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ErrorNotFoundComponent } from './error-not-found.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ErrorNotFoundComponent
      }
    ])
  ],
  declarations: [ErrorNotFoundComponent]
})
export class ErrorNotFoundModule { }
