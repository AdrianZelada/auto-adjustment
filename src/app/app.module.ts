import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoAdjustmentComponent } from './auto-adjustment/auto-adjustment.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoAdjustmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
