import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AconselhamentoPage } from '../aconselhamento/aconselhamento';
import { FarmaciaPage } from './../farmacia/farmacia';
import { MonitoramentoPage } from './../monitoramento/monitoramento';
import { NoticiaPage } from './../noticia/noticia';
import { ListPage } from './../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  public user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) 
  {
    this.user = this.navParams.get('user');
  }

  onNoticia(): void{
    this.navCtrl.setRoot(NoticiaPage);
  }

  onBuscaFarmacia(): void{
    this.navCtrl.push(FarmaciaPage);
  }

  onBeneficiario(): void{
    this.navCtrl.setRoot(ListPage);
  }

  onMonitoramento(): void{
    this.navCtrl.setRoot(MonitoramentoPage);
  }

  onAconselhamento(): void{
    this.navCtrl.setRoot(AconselhamentoPage);
  }

}
