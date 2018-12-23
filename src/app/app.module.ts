import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TimerComponent} from './timer/timer.component';
import { TimerOnPushComponent } from './timer-on-push/timer-on-push.component';
import { TimerManualComponent } from './timer-manual/timer-manual.component';
import { TimerButtonComponent } from './timer-button/timer-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerOnPushComponent,
    TimerManualComponent,
    TimerButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
