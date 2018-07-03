import { FarmaciaDetalhePage } from './../farmacia-detalhe/farmacia-detalhe';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IFarmacia } from './../../Interfaces/IFarmacia';
import { FarmaciaService } from './../../providers/farmacia/farmacia.service';

@IonicPage()
@Component({
  selector: 'page-farmacias',
  templateUrl: 'farmacias.html',
})
export class FarmaciasPage {
  
  public farmacias: IFarmacia[];
  public estado: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public farmaciaService: FarmaciaService
  )
  {
    this.farmacias = this.navParams.get('farmacias')
    this.estado = this.navParams.get('estado')
    console.log(this.farmacias);
  }

  ionViewDidLoad() {
  }
  
  onDetalhes(farmacia: IFarmacia){
    farmacia.estado = this.estado
    this.navCtrl.push(FarmaciaDetalhePage, {farmacia : farmacia})
  }

}
