import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AssCountdownComponent } from './ass-countdown/ass-countdown.component';


@NgModule({
  declarations: [
    AppComponent,
    AssCountdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
