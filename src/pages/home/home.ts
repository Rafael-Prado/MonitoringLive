import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Socket } from 'ng2-socket-io';


import { CarterinhaPage } from './../carterinha/carterinha';
import { FarmaciaPage } from './../farmacia/farmacia';
import { MedicamentoPage } from './../medicamento/medicamento';
import { MonitoramentoPage } from './../monitoramento/monitoramento';
import { NoticiaPage } from './../noticia/noticia';

import { IInformacoes } from './../../Interfaces/IInformacoes';
import { InformacoesService } from '../../providers/informacoes/informacoes.service';
import { PrescricaoPage } from '../prescricao/prescricao';
import { VideoChamadaPage } from '../video-chamada/video-chamada';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user: any;
  public informacoes: IInformacoes;
  public urlSaude: string;
  public urlProntuario: string;
  public telefoneCentral: string;
  public nomeUsuario: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public infoService: InformacoesService,
    public loadingCtrl: LoadingController,
    private storage: Storage,
    private camera: Camera,
    private socket: Socket
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
    this.storage.get('telefoneCentral').then((val) => {
      this.telefoneCentral = val;
    });
    this.storage.get('nomeUsuario').then((val) => {
      this.nomeUsuario = val;
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

  getCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.storage.set('foto', base64Image);
     }, (err) => {
      console.log(err);
     });
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

  onPrescricao(): void{
    this.navCtrl.setRoot(PrescricaoPage);
  }

  onChamadaVideo(){
    this.navCtrl.setRoot(VideoChamadaPage);
  }

  onChat(){
    this.socket.connect();
    this.socket.emit('set-pradoname', this.nomeUsuario);
    this.navCtrl.setRoot('ChatPage', {chatname: this.nomeUsuario});
  }

}
