import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AconselhamentoPage } from './../pages/aconselhamento/aconselhamento';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { MonitoramentoPage } from './../pages/monitoramento/monitoramento';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen
  )
  {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Monitoring Lives App ', component: HomePage, icon :'closed-captioning'},    
      { title: 'Monitoramento', component: MonitoramentoPage, icon: 'albums' },        
      { title: 'Aconselhamento', component: AconselhamentoPage, icon: 'call' },      
      { title: 'Logout', component: LoginPage, icon: 'close-circle'  },  
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
