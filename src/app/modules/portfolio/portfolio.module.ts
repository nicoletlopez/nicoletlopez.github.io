import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { HomeModule } from './home/home.module';
import { SidebarModule } from 'src/app/shared/modules/sidebar/sidebar.module';
import { AboutMeModule } from './about-me/about-me.module';
import { SkillsModule } from './skills/skills.module';
import { MyWorksModule } from './my-works/my-works.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    HomeModule,
    AboutMeModule,
    SkillsModule,
    MyWorksModule,
    ContactModule,
    SidebarModule,
  ]
})
export class PortfolioModule { }
