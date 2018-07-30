import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { PrescricaoProvider } from '../../providers/prescricao/prescricao.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { IPrescricao } from '../../Interfaces/IPrescricao';

@IonicPage()
@Component({
  selector: 'page-modal-prescricao',
  templateUrl: 'modal-prescricao.html',
})
export class ModalPrescricaoPage {

  prescricao: IPrescricao;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private prescricaoProvider: PrescricaoProvider,
    private camera: Camera,
    public toast: ToastController,
    public modalCtrl: ModalController,
  )
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPrescricaoPage');
  }

  salvar(){
    this.salvarPrescrica()
    .then(() =>{
      this.toast.create({message: 'Prescrição salva', duration: 3000, position: 'bottom'}).present();

    })
    .catch(() =>{
      this.toast.create({message: 'Erro ao salvar Prescrição', duration: 3000, position: 'bottom'}).present();
    });
  }

  private salvarPrescrica(){
    if(this.prescricao.Id){
     // return this.lancamentoProvider.update(this.prescricao);
    }else{
      return this.prescricaoProvider.insert(this.prescricao);
    }

  }
  getCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      console.log(err);
     });
  }

}
