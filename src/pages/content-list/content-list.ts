import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { AppServiceProvider } from '../../providers/app-service/app-service';

import { ContentDetailPage } from '../../pages/content-detail/content-detail';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the ContentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-content-list',
  templateUrl: 'content-list.html',
})
export class ContentListPage {

  parameter: any;
  categoryContents:any;
  loading:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private appService: AppServiceProvider, public loadingCtrl: LoadingController) {
    this.parameter = this.navParams.get('categoryItem');
    console.log("parametre: ",this.parameter);

    this.getContentList(this.parameter);
    
  }

  getContentList(param){
    this.showLoadingIcon();
    this.appService.getCategoryContents(param.CategoryId).subscribe(result => {
      console.log("result: ", result);
      
      this.setContentList(result);
      this.loading.dismiss();
      
      
    });
  }

  setContentList(data){
    this.categoryContents = data.Result;
    let favoriteList = this.appService.getFavoriteList();
    this.mergeFavoriteList(favoriteList);

    console.log("User Favorite List: ", favoriteList);
    console.log(this.categoryContents);
  }

  getContentDetail(id) {
    this.navCtrl.push(ContentDetailPage, {
      id:id
    });
  }

  doFavori(contentItem) {

    var memberID = localStorage.getItem('memberID');

    if (!contentItem.IsFavorite) {
      console.log("favori edildi");

      this.appService.addFavori(memberID, contentItem.BlogContentId).subscribe(result => {
        console.log("AddFavori", result);
      });

      contentItem.IsFavorite = !contentItem.IsFavorite;
    }
    else {
      console.log("favoriden çıktı");
       
      this.appService.deleteFavori(memberID, contentItem.BlogContentId).subscribe(result => {
        console.log("RemoveFavori: ", result);
      });

      contentItem.IsFavorite = !contentItem.IsFavorite;
    }
  }

  sendMessage(contentItem) {
    this.navCtrl.push(ContactPage, {
      content: contentItem
    });
  }

  mergeFavoriteList(favoriteList) {
    console.log(favoriteList);
    for (var i = 0; i < this.categoryContents.length; i++) {

      if (favoriteList.length == 0) {
        this.categoryContents[i].IsFavorite = false;
      }
      else {
        for (var j = 0; j < favoriteList.length; j++) {
          if (this.categoryContents[i].BlogContentId == favoriteList[j].ContentId) {
            this.categoryContents[i].IsFavorite = true;
          }
          else {
            this.categoryContents[i].IsFavorite = false;
          }
        }
      }
    }

  }

  showLoadingIcon() {
    this.loading = this.loadingCtrl.create({
      content: 'Bekleyiniz...'
    });

    this.loading.present();
  }


}
