import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { PrescricaoProvider } from './../../providers/prescricao/prescricao.service';
import { IPrescricao } from '../../Interfaces/IPrescricao';
import { ModalPrescricaoPage } from '../modal-prescricao/modal-prescricao';

@IonicPage()
@Component({
  selector: 'page-prescricao',
  templateUrl: 'prescricao.html',
})
export class PrescricaoPage {

  prescricao: IPrescricao;
  prescricoes: IPrescricao[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private prescricaoProvider: PrescricaoProvider,
    private camera: Camera,
    public toast: ToastController,
    public modalCtrl: ModalController,
  )
  {

  }

  ionViewDidLoad() {
    this.getPrescricao();
  }
  onForm(): void{
    this.getPrescricao();
  }

  insert() {
    let modal = this.modalCtrl.create(ModalPrescricaoPage);
    modal.present()
  }  

  getPrescricao() {
    this.prescricaoProvider.getListaPrescricao()
      .then((result: any) => {
        this.prescricoes = result;
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao carregar contas', duration: 3000, position: 'buttom' }).present();
      })
  }


}
