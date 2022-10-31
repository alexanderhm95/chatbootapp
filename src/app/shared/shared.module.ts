import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChanelsComponent } from './component/chanels/chanels.component';
import { HeaderComponent } from './component/header/header.component';
import { NavarComponent } from './component/navar/navar.component';



@NgModule({
  declarations: [
    ChanelsComponent,
    HeaderComponent,
    NavarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChanelsComponent,
    HeaderComponent,
    NavarComponent
  ]
})
export class SharedModule { }
