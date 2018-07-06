import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AconselhamentoPage } from '../aconselhamento/aconselhamento';
import { FarmaciaPage } from './../farmacia/farmacia';
import { MedicamentoPage } from './../medicamento/medicamento';
import { MonitoramentoPage } from './../monitoramento/monitoramento';
import { NoticiaPage } from './../noticia/noticia';
import { ListPage } from './../list/list';

import { IInformacoes } from './../../Interfaces/IInformacoes';
import { InformacoesService } from '../../providers/informacoes/informacoes.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  
  public user: any;
  public informacoes: IInformacoes;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public infoService: InformacoesService,
  ) 
  {
    this.user = this.navParams.get('user');    
  }
  ionViewDidLoad(){
   this.getInfomacoes();
  }

  getInfomacoes(){
    this.infoService.getInformacoes()
    .subscribe(result => {
      this.informacoes = result;
      console.log(this.informacoes)
    }, error =>{
      console.log(error);
    })   
  }

  onNoticia(): void{
    this.navCtrl.push(NoticiaPage);
  }

  onBuscaFarmacia(): void{
    this.navCtrl.push(FarmaciaPage);
  }

  onBuscaMedicamento(): void{
    this.navCtrl.push(MedicamentoPage);
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
