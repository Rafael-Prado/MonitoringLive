import { INoticiaInterface } from './../../Interfaces/INoticia.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetalhesNoticiaPage } from './../detalhes-noticia/detalhes-noticia';
import { NoticiaService } from './../../providers/noticia/noticia.service';

@IonicPage()
@Component({
  selector: 'page-noticia',
  templateUrl: 'noticia.html',
})
export class NoticiaPage {

  public noticias: any =[];
  public urlImagensPadrao: string = 'https://lh3.googleusercontent.com/3crCthS1lszNVQ4TDhgOZYHoqwJpyS7UStCclfqNchFrN18tnW5ZvPA093BfOzqXlw=w300';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public noticiasService: NoticiaService
  )
  {
    
  }

  ionViewDidLoad() {
    this.getAllNoticias();
  }

  getAllNoticias(){
    this.noticiasService.GetAllNoticias()
    .subscribe(result => {
      this.noticias = result;
    }, error =>{
      console.log(error);
    });
  }

  abreDetalhe(noticia: INoticiaInterface){
    this.navCtrl.push(DetalhesNoticiaPage, {noticia: noticia});
  }

}
