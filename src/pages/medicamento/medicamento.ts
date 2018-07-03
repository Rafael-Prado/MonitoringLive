import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { MedicamentoService } from './../../providers/medicamento/medicamento.service';

@IonicPage()
@Component({
  selector: 'page-medicamento',
  templateUrl: 'medicamento.html',
})
export class MedicamentoPage {
  public palavra : any;
  public medicamentos: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public medicamentoService: MedicamentoService,
    public loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
  }

  onForm(): void{    
    this.getMedicamento(this.palavra);
  }

  getMedicamento(palavra){
    console.log(palavra);
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    this.medicamentoService.getMeticamentos(palavra)
    .subscribe(resultado => {
      loading.present();  
      setTimeout(() => { 
        loading.dismiss();
        this.medicamentos = resultado;
    }, 5000)    
      
    }, error =>{
      console.log(error);
    })
   
    
  }

}
