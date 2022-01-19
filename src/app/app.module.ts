import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BallinComponent } from './ballin/ballin.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { MiceComponent } from './mice/mice.component';
import { PadComponent } from './pad/pad.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BallinComponent,
    NavbarComponent,
    LifestyleComponent,
    MiceComponent,
    PadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
