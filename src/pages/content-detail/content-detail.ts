import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AppServiceProvider } from '../../providers/app-service/app-service';

@IonicPage()
@Component({
  selector: 'page-content-detail',
  templateUrl: 'content-detail.html',
})
export class ContentDetailPage {

  contentID: any;
  content: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppServiceProvider) {
    this.contentID = this.navParams.get('id');

    this.getContent(this.contentID);
    this.setReadContent(this.contentID);
  }

  getContent(id) {
    this.appService.getContentDetail(id).subscribe(result => {
      console.log(result);
      this.content = result.Result;
      
    });
  }

  setReadContent(contentID) {
    let memberID = localStorage.getItem('memberID');
    this.appService.setReadContent(memberID,contentID).subscribe(result => {
      console.log("Set Read: ",result);
    });
  }

}
