import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';


@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  video: any = {
    url: 'https://www.youtube.com/embed/MLleDRkSuvk',
    title: 'Awesome video'
  };

  trustedVideoUrl: SafeResourceUrl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dom: DomSanitizer) {
    this.init();
  }

  init() {
    this.trustedVideoUrl = this.dom.bypassSecurityTrustResourceUrl(this.video.url);
  }


}
