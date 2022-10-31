import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { ModuleComponent } from './module/module.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    ModuleComponent,
  ],
  imports: [  //importaciones de modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
