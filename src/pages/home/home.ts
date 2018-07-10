import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AconselhamentoPage } from '../aconselhamento/aconselhamento';
import { FarmaciaPage } from './../farmacia/farmacia';
import { MedicamentoPage } from './../medicamento/medicamento';
import { MonitoramentoPage } from './../monitoramento/monitoramento';
import { NoticiaPage } from './../noticia/noticia';

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
    public loadingCtrl: LoadingController
  ) 
  {    
            
  }
  ionViewDidLoad(){   
    this.getInfomacoes();     
  }

  getInfomacoes(){
    this.infoService.getInformacoes()
    .subscribe(result => {      
        this.informacoes = result;    
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

  onMonitoramento(): void{
    this.navCtrl.setRoot(MonitoramentoPage);
  }

  onAconselhamento(): void{
    this.navCtrl.setRoot(AconselhamentoPage);
  }

}
