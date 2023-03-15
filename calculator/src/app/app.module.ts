import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { HeaderComponent } from './shared/header/header.component';
import { BtnSettingComponent } from './shared/button/btn-setting/btn-setting.component';
import { BtnFavoriteComponent } from './shared/button/btn-favorite/btn-favorite.component';
import { BtnShareComponent } from './shared/button/btn-share/btn-share.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnSettingComponent,
    BtnFavoriteComponent,
    BtnShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
