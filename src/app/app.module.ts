import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { AconselhamentoPage } from './../pages/aconselhamento/aconselhamento';
import { CarterinhaPage } from './../pages/carterinha/carterinha';
import { FarmaciaPage } from './../pages/farmacia/farmacia';
import { MyApp } from './app.component';
import { InformacoesService } from './../providers/informacoes/informacoes.service';
import { FarmaciaDetalhePage } from './../pages/farmacia-detalhe/farmacia-detalhe';
import { FarmaciasPage } from './../pages/farmacias/farmacias';
import { MedicamentoPage } from './../pages/medicamento/medicamento';
import { MonitoramentoPage } from './../pages/monitoramento/monitoramento';
import { NoticiaPage } from './../pages/noticia/noticia';
import { DetalhesNoticiaPage } from './../pages/detalhes-noticia/detalhes-noticia';
import { HomePage } from '../pages/home/home';
import { LoginPage } from './../pages/login/login';

import { FarmaciaService } from '../providers/farmacia/farmacia.service';
import { EstadosService } from './../providers/estados/estados.service';
import { MedicamentoService } from './../providers/medicamento/medicamento.service';
import { NoticiaService } from './../providers/noticia/noticia.service';
import { UserService } from './../providers/userservice/user.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { SocketIoModule, SocketIoConfig } from 'ng2-socket-io';
import { ChatProvider } from '../providers/chat/chat';
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AconselhamentoPage,
    CarterinhaPage,
    MyApp,
    HomePage,
    MonitoramentoPage,
    LoginPage,
    NoticiaPage,
    DetalhesNoticiaPage,
    FarmaciaPage,
    FarmaciasPage,
    FarmaciaDetalhePage,
    MedicamentoPage,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AconselhamentoPage,
    CarterinhaPage,
    MyApp,
    HomePage,
    MonitoramentoPage,
    LoginPage,
    NoticiaPage,
    DetalhesNoticiaPage,
    FarmaciaPage,
    FarmaciasPage,
    FarmaciaDetalhePage,
    MedicamentoPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    NoticiaService,
    EstadosService,
    FarmaciaService,
    MedicamentoService,
    InformacoesService,
    Camera,
    ChatProvider
  ]
})
export class AppModule {}
