import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HomeModule } from './home/home.module';
import { SidebarModule } from 'src/app/shared/modules/sidebar/sidebar.module';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    HomeModule,
    SidebarModule,
  ]
})
export class PortfolioModule { }
