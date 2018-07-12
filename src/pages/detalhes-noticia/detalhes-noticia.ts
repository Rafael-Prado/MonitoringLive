import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { INoticiaInterface } from './../../Interfaces/INoticia.interface';
import { NoticiaService } from './../../providers/noticia/noticia.service';

@IonicPage()
@Component({
  selector: 'page-detalhes-noticia',
  templateUrl: 'detalhes-noticia.html',
})
export class DetalhesNoticiaPage {
  public noticia: INoticiaInterface;
  public noticiaCorpo: string;
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public noticiaService: NoticiaService, 
    ) 
    {
      this.noticia = this.navParams.get('noticia');
      this
      console.log(this.noticia.Titulo) 
      this.noticiaService.GetNoticiaPorId(this.noticia.Id)
      .subscribe(result => {
        let n = result;
        this.noticiaCorpo = n.Corpo   
      }),
      error => {
        console.log(error);
      }    
      
    }

  ionViewDidLoad() {
   }

  getNoticiaId(): any {
    
  }

}
