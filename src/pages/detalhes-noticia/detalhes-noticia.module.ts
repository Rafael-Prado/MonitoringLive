import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesNoticiaPage } from './detalhes-noticia';

@NgModule({
  declarations: [
    DetalhesNoticiaPage
  ],
  imports: [
    IonicPageModule.forChild(DetalhesNoticiaPage),
  ],
})
export class DetalhesNoticiaPageModule {}
