import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmaciasPage } from './farmacias';

@NgModule({
  declarations: [
    FarmaciasPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmaciasPage),
  ],
})
export class FarmaciasPageModule {}
