import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-carterinha',
  templateUrl: 'carterinha.html',
})
export class CarterinhaPage {
  public carterinhaFrete: string;
  public carterinhaVerso: string;
  public nomeUsuario:string;
  public codigoCarterinha: string;
  public telefoneCentra: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,    
    private storage: Storage,
    )
  {

  }

  ionViewDidLoad() { 
    this.storage.get('carterinhaFrete').then((val) => {
      this.carterinhaFrete = val;    
    });
    this.storage.get('carterinhaVerso').then((val) => {
      this.carterinhaVerso = val;
    });
    this.storage.get('nomeUsuario').then((val) => {
      this.nomeUsuario = val;    
    });
    this.storage.get('carterinha').then((val) => {
      this.codigoCarterinha = val;
    });
    this.storage.get('Telefonecentral').then((val) => {
      this.telefoneCentra = val;
    });
  }
}
