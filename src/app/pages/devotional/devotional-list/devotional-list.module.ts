import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DevotionalListComponent } from './devotional-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterModule } from 'src/app/components/footer/footer.module';



@NgModule({
  imports: [
    CommonModule,
    //FormsModule,
    IonicModule,
    TranslateModule,
    FooterModule,
    RouterModule.forChild([
      {
        path: '',
        component: DevotionalListComponent
      }
    ])
  ],
  declarations: [DevotionalListComponent]
})
export class DevotionalListModule { }
