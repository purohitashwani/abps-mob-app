import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterModule } from '../../components/footer/footer.module';
import { HeaderdModule } from '../../components/header/header.module';
import { SideMenuModule } from '../../components/side-menu/side-menu.module';
import { SideMenuHeaderModule } from '../../components/side-menu-header/side-menu-header.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterModule,
    HeaderdModule,
    SideMenuModule,
    SideMenuHeaderModule,
    TranslateModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      }
    ])
  ],
  declarations: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
