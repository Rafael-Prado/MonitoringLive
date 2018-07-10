import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AconselhamentoPage } from './../pages/aconselhamento/aconselhamento';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { MonitoramentoPage } from './../pages/monitoramento/monitoramento';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Monitoring Lives App ', component: HomePage,},    
      { title: 'Monitoramento', component: MonitoramentoPage },        
      { title: 'Aconselhamento', component: AconselhamentoPage },      
      { title: 'Logout', component: LoginPage },  
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {    
    this.nav.setRoot(page.component);
  }
}
