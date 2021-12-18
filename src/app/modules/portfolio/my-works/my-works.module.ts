import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorksComponent } from './my-works.component';
import { ContentHeaderModule } from 'src/app/shared/modules/content-header/content-header.module';


@NgModule({
  declarations: [
    MyWorksComponent,
  ],
  imports: [
    CommonModule,
    ContentHeaderModule,
  ],
  exports: [
    MyWorksComponent,
  ],
})
export class MyWorksModule { }
