import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IFarmacia } from '../../Interfaces/IFarmacia';

@IonicPage()
@Component({
  selector: 'page-farmacia-detalhe',
  templateUrl: 'farmacia-detalhe.html',
})
export class FarmaciaDetalhePage {

  public farmacia: IFarmacia;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
  )
  {
    this.farmacia = this.navParams.get('farmacia');
    console.log(this.farmacia);
    this.farmacia.mapa = this.getMap();
  }

  ionViewDidLoad() {
  }

  private getEndereco(){
    return this.farmacia.Endereco + '-' + this.farmacia.Bairro + ',' +
      this.farmacia.Cidade + '-' + this.farmacia.estado;
  }

  private getMap(){
    let maps = 'https://maps.googleapis.com/maps/api/staticmap?center='+ this.getEndereco() +
    '&zoom=20&size=600x400&markers=color:blue&key=AIzaSyC6g2icqlY8kXW5AVP8BryCnXBTepV5EcU'
console.log(maps);
  return maps;
  }

  

}
