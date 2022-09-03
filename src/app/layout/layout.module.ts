import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SidebarComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, AngularMaterialModule, RouterModule],
  exports: [SidebarComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {}
