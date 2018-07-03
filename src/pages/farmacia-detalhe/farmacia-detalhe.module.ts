import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmaciaDetalhePage } from './farmacia-detalhe';

@NgModule({
  declarations: [
    FarmaciaDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(FarmaciaDetalhePage),
  ],
})
export class FarmaciaDetalhePageModule {}
