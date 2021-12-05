import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyWorksComponent } from './my-works.component';


@NgModule({
  declarations: [
    MyWorksComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyWorksComponent,
  ]
})
export class MyWorksModule { }
