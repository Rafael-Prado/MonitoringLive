import { VideoChamadaProvider } from './../../providers/video-chamada/video-chamada';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IVideochamada } from '../../Interfaces/IVideochamada';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-video-chamada',
  templateUrl: 'video-chamada.html',
})
export class VideoChamadaPage {

  videoChamada: IVideochamada;
  telefone: string;
  private urlChamadaPadrao: string = 'https://appr.tc/r/';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private videoChamadaProvider: VideoChamadaProvider,
    private iab: InAppBrowser
    )
    {
      this.videoChamada = new IVideochamada();
  }

  ionViewDidLoad() {
      this.storage.get('idUsuario').then((val) => {
        this.videoChamada.IdUsuario = val;
      });
      this.storage.get('nomeUsuario').then((val) => {
        let nome = val;
        let nomeSemEspaco = nome.replace(" ","")
        this.videoChamada.urlChamada = this.urlChamadaPadrao + nomeSemEspaco;
        console.log(this.videoChamada.urlChamada)
      });

      this.videoChamada.DataSolicitacao = new Date();
  }

  onForm(){
    this.getVideoChamada(this.telefone)
  }

  getVideoChamada(tel: string) {
    this.videoChamada.Telefone = tel;
    this.videoChamadaProvider.PostVideoChamada(this.videoChamada)
    .subscribe( (result: any) =>{
      this.videoChamada.urlChamada = result.Url;
      this.openBroser(this.videoChamada.urlChamada);
    }, error =>{
      console.log(error);
    });

  }

  openBroser(url: string){
    const options: InAppBrowserOptions = {
    zoom: 'no'
    }
    const browser = this.iab.create(url, '_system', options);
  }

}
