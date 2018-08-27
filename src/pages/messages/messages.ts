import { Component, Provider } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppServiceProvider } from '../../providers/app-service/app-service';

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  msgList:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appService:AppServiceProvider) {

    this.init();
  }

  init() {
    let memberId = localStorage.getItem('memberID');
    this.appService.getUsersMessages(memberId).subscribe(result => {
      console.log("Member msg: ",result);
      this.msgList = result.Result;
      this.msgList.forEach(item => {
        let d = new Date(item.CreatedDate).toLocaleDateString();
        item.CreatedDate = d;
      });
    });
  }



}
