import { FarmaciasPage } from './../farmacias/farmacias';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { IFarmacia } from './../../Interfaces/IFarmacia';
import { IEstado } from '../../Interfaces/IEstado';
import { ICidade } from './../../Interfaces/ICidade';
import { IBairro } from '../../Interfaces/IBairro';

import { EstadosService } from './../../providers/estados/estados.service';
import { FarmaciaService } from './../../providers/farmacia/farmacia.service';

@IonicPage()
@Component({
  selector: 'page-farmacia',
  templateUrl: 'farmacia.html',
})
export class FarmaciaPage {
  public estado: IEstado;
  public cidade: ICidade ;
  public bairro: IBairro;

  public estados: IEstado[];
  public cidades: ICidade[];
  public bairros: IBairro[];
  public farmacias: IFarmacia[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public estadosService: EstadosService,    
    public loadingCtrl: LoadingController,
    public farmaciaService:FarmaciaService
  )
  {
    this.getEstados();
  }

  ionViewDidLoad() {
  }

  getEstados(){
     this.estadosService.getAllEstados()
    .subscribe(result =>{
      this.estados = result;
    }, error =>{
      console.log(error);
    })
  }

  getCidades(estado: any){
    this.estadosService.getAllCidade(estado)
    .subscribe(result =>{
      this.cidades = result;
    }, error =>{
      console.log(error);
    })
  }

  getBairro(estado: any, cidade: any){
    this.estadosService.getAllBairro(estado, cidade)
    .subscribe(result =>{
      this.bairros = result;
    }, error =>{
      console.log(error);
    })
  }

  buscarFarmacia(estado: any, cidade: any, bairro: any){
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    this.farmaciaService.getFarmacias(estado, cidade, bairro)
    .subscribe(result =>{
      this.farmacias = result;
      loading.present();
    }, error =>{
      console.log(error);
    })
    setTimeout(() => {
      this.navCtrl.push(FarmaciasPage, {farmacias: this.farmacias, estado: estado})
      loading.dismiss();
  }, 5000)
    
  }
  

}
