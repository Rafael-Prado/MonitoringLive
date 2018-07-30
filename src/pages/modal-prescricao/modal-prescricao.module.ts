import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPrescricaoPage } from './modal-prescricao';

@NgModule({
  declarations: [
    ModalPrescricaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalPrescricaoPage),
  ],
})
export class ModalPrescricaoPageModule {}
