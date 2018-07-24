import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Socket } from 'ng2-socket-io';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {


  messages = [];
  chatname = '';
  message = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toastCtrl: ToastController,
    private socket: Socket )
  {
    this.chatname = this.navParams.get('chatname');

    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] == 'left') {
        this.showToast('User left:' + user);

      } else {
        this.showToast('User joinet:' + user);
      }
    });
  }

  getUsers(){
    let observable = new Observable(observer =>{
      this.socket.on('user-changed', data =>{
        observer.next(data);
      })
    });
    return observable
  }

  sedMessage(){
    this.socket.emit('add-message', {text: this.message});
    this.message = '';
  }

  getMessages(){
    let observable = new Observable(observer =>{
      this.socket.on('message', data =>{
        observer.next(data);
      })
    });
    return observable
  }

  showToast(msg){
    let toast = this.toastCtrl.create({
      message:msg,
      duration: 2000
    });
    toast.present();
  }

  ionViewWillLeave(){
   this.socket.disconnect();
  }

}
