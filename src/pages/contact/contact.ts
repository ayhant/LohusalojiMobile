import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { AppServiceProvider } from '../../providers/app-service/app-service';
import { MessagesPage } from '../messages/messages';

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  content: any;
  msgTitle: string = '';
  msgText: string = '';
  isDisabledTitle = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppServiceProvider, public storage: Storage, public toastCtrl: ToastController) {
    this.content = this.navParams.get('content');
    if (this.content != null) {
      if (this.content.ContentId != undefined && this.content.ContentTitle != undefined) {
        this.msgTitle = this.content.ContentId + ' - ' + this.content.ContentTitle;
        this.isDisabledTitle = true;
      } else if (this.content.BlogContentId != undefined && this.content.Title != undefined) {
        this.msgTitle = this.content.BlogContentId + ' - ' + this.content.Title;
        this.isDisabledTitle = true;
      }
      else
        this.isDisabledTitle = false;
    }
  }


  sentMsg(title, text) {
    this.storage.get('memberID').then(memberID => {
      console.log(memberID);
      this.appService.sentMessage(title, text, memberID).subscribe(result => {
        console.log("message result: ", result);
        if (result.Result != -1) {

          this.appService.sentMailMessage(result.Result, memberID).subscribe(mailMsgResult => {
            console.log('MAil Message Result:', mailMsgResult);
            if (mailMsgResult != -1) {
              this.msgTitle = '';
              this.msgText = '';
              this.isDisabledTitle = false;
              this.showMessage('Mesajını İletilmiştir!');
            }
            else {
              this.showMessage('Beklenmeyen bir hata oluştu tekrar deneyiniz!');
            }
          });

        }
        else {
          this.showMessage('Beklenmeyen bir hata oluştu tekrar deneyiniz!');
        }
      });

    });



  }

  showMessage(msg) {

    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();

  }

  userMsg() {
    this.navCtrl.push(MessagesPage);
  }

}
