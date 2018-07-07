import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AconselhamentoPage } from './../pages/aconselhamento/aconselhamento';
import { HomePage } from '../pages/home/home';
import { MonitoramentoPage } from './../pages/monitoramento/monitoramento';
import { ListPage } from '../pages/list/list';

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
      { title: 'Monitoring Lives App ', component: HomePage },
      { title: 'Beneficiários', component: ListPage },      
      { title: 'Monitoramento', component: MonitoramentoPage },        
      { title: 'Aconselhamento', component: AconselhamentoPage }
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
