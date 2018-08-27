import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { IonicStorageModule } from '@ionic/storage';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { Device } from '@ionic-native/device';
import { AppVersion } from '@ionic-native/app-version';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ContentListPage } from '../pages/content-list/content-list'
import { ContentDetailPage} from '../pages/content-detail/content-detail';
import { ContactPage } from '../pages/contact/contact';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage } from '../pages/login/login';
import { SurveyPage } from '../pages/survey/survey';
import { AboutPage } from '../pages/about/about';
import { IsgivebirthPage } from '../pages/isgivebirth/isgivebirth';
import { HelpPage } from '../pages/help/help';
import { MessagesPage } from '../pages/messages/messages';
import { InformationPage } from '../pages/information/information';

import { AppServiceProvider } from '../providers/app-service/app-service';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContentListPage,
    ContentDetailPage,
    ContactPage,
    SettingsPage,
    SurveyPage,
    AboutPage,
    IsgivebirthPage,
    LoginPage,
    HelpPage,
    InformationPage,
    MessagesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContentListPage,
    ContentDetailPage,
    ContactPage,
    SettingsPage,
    SurveyPage,
    AboutPage,
    IsgivebirthPage,
    LoginPage,
    HelpPage,
    InformationPage,
    MessagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SafariViewController,
    Camera,
    Device,
    AppVersion,
    AppServiceProvider
  ]
})
export class AppModule {}
