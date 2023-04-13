import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { WorkInProgressComponent } from './work-in-progress.component';
import { FooterModule } from '../../components/footer/footer.module';
import { HeaderdModule } from '../../components/header/header.module';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';
import { SideMenuHeaderModule } from '../../components/side-menu-header/side-menu-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterModule,
    HeaderdModule,
    SideMenuModule,
    SideMenuHeaderModule,
    RouterModule.forChild([
      {
        path: '',
        component: WorkInProgressComponent
      }
    ])
  ],
  exports: [WorkInProgressComponent],
  declarations: [WorkInProgressComponent]
})
export class WorkInProgressModule { }
