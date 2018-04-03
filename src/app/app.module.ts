import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';

import { UserService } from '../providers/user/user.service';

import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyC8TRZGj42qnL5iNAjdfkjP6A-fb5wL2WY",
  authDomain: "resolucoes-51854.firebaseapp.com",
  databaseURL: "https://resolucoes-51854.firebaseio.com",
  storageBucket: "resolucoes-51854.appspot.com",
  messagingSenderId: "706249543181"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,  
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
