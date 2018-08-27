import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SafariViewController } from '@ionic-native/safari-view-controller';

import { AppServiceProvider } from '../../providers/app-service/app-service';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  pageParameter: any;
  content: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public appService: AppServiceProvider, public safariViewController: SafariViewController) {
    this.pageParameter = this.navParams.get('Page');


    this.init();
  }

  init() {
    this.getContent();
  }

  getContent() {
    let contentID = 0;
    if (this.pageParameter == 'about') {
      contentID = 17
    }
    else if (this.pageParameter == 'accepting') {
      contentID = 19;
    }
    else if (this.pageParameter == 'song') {
      contentID = 18;
    }


    this.appService.getContentDetail(contentID.toString()).subscribe(result => {
      console.log(result);
      this.content = result.Result;
      console.log(this.content);
    });


  }

  clickEvent(e) {

    var url = "";
    var tagName = e.srcElement.tagName;
    var sourceElement = e.srcElement;
    url = sourceElement.parentElement.href;

    if (tagName == "LABEL" || tagName == "SPAN") {
      var labelSrc = sourceElement.parentElement;
      url = labelSrc.parentElement.href;
    }
    else if (tagName == "IMG") {
      url = sourceElement.parentElement.href;
    }
    else if (tagName == "A") {
      url = sourceElement.href
    }
    else {
      console.log("bilinmeyen bir şeye tıklandı");
    }

    if (url != "" && url != undefined) {
      console.log(url);
      this.openURLonBrowser(url);
    }
  }

  openURLonBrowser(url) {


    this.safariViewController.isAvailable()
      .then((available: boolean) => {
        if (available) {

          this.safariViewController.show({
            url: url,
            hidden: false,
            animated: false,
            transition: 'fade',
            enterReaderModeIfAvailable: true
          })
            .subscribe((result: any) => {
              if (result.event === 'opened') { console.log('Opened', result); }
              else if (result.event === 'loaded') { console.log('Loaded', result); }
              else if (result.event === 'closed') {
                console.log('Closed', result);
                this.safariViewController.hide();
              }
            },
              (error: any) => console.error(error)
            );

        } else {
          // use fallback browser, example InAppBrowser
        }
      }
      );



  }




}
