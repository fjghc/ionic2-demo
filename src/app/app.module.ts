import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LazyExtIonicModule } from 'ext-ionic';

import { ListData } from '../providers/list-data';
import { MyApp } from './app.component';

const declarations: Array<any> = [
  MyApp
];

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        android: {
          statusbarPadding: true
        },
        ios: {
          backButtonText: ''
        }
      }
    }),
    LazyExtIonicModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: declarations,
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ListData
  ]
})
export class AppModule { }
