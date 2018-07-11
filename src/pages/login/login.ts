import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HomePage } from './../home/home';
import { UserService } from './../../providers/userservice/user.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public formLogin : FormGroup
  public user: any;

  constructor(
    private fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public userService: UserService,
    private storage: Storage,
    ) {
      this.formLogin = this.fb.group({
      username:['71437565557', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(120),
        Validators.required
      ])],
      password:['123456', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  submit(){
    let loading = this.loadingCtrl.create({
      content: 'Autenticando...'
    });
    loading.present();
    this.userService.authenticate(this.formLogin.value)
    .subscribe(data => {
      this.user = data;
      this.onStorage();
      loading.dismiss();
     this.navCtrl.setRoot(HomePage, {user: this.user});
     });
   }

   onStorage(){
    this.storage.set('carterinhaFrete', this.user.UrlCarteiraFrente );    
    this.storage.set('carterinhaVerso', this.user.UrlCarteiraVerso);
    this.storage.set('urlProntuario', this.user.UrlPps);
    this.storage.set('urlPesquisaSaude', this.user.UrlPesquisaSaude);
    this.storage.set('carterinhaVerso', this.user.UrlCarteiraVerso);  
   }
   
   ionViewCanEnter(){
     console.log('passe');
    this.storage.clear();
   }

}
