import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { AconselhamentoPage } from '../aconselhamento/aconselhamento';
import { CarterinhaPage } from './../carterinha/carterinha';
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
  public urlSaude: string;
  public urlProntuario: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public infoService: InformacoesService,
    public loadingCtrl: LoadingController,       
    private storage: Storage,
  ) 
  {    
            
  }
  ionViewDidLoad(){   
    this.getInfomacoes();   
    this.storage.get('urlPesquisaSaude').then((val) => {
      this.urlSaude = val;    
    });
    this.storage.get('urlProntuario').then((val) => {
      this.urlProntuario = val;
    });  
  }

  getInfomacoes(){
    this.infoService.getInformacoes()
    .subscribe(result => {      
        this.informacoes = result;    
    }, error =>{
      console.log(error);
    }) 
      
  }

  onBuscaCarterinha(){
    this.navCtrl.push(CarterinhaPage);
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
