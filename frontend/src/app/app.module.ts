import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {StartGameComponent} from './components/start-game/start-game.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GameboardComponent} from './components/gameboard/gameboard.component';
import {AttemptComponent} from './components/attempt/attempt.component';
import {LogInterceptor} from "./interceptors/log.interceptor";
import {LogsComponent} from './components/logs/logs.component';
import {RequestFilterPipe} from './pipes/request-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartGameComponent,
    GameboardComponent,
    AttemptComponent,
    LogsComponent,
    RequestFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
