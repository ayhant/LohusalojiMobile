import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ContentDetailPage } from '../content-detail/content-detail';
import { ContentListPage } from '../content-list/content-list';
import { ContactPage } from '../contact/contact';

import { AppServiceProvider } from '../../providers/app-service/app-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  segment = 'all';
  title = "Tüm İçerikler";
  allContent: any = [];
  w1Contents: any = [];
  w2Contents: any = [];
  w3Contents: any = [];
  w4Contents: any = [];
  w5Contents: any = [];
  w6Contents: any = [];
  favoritesContents: any = [];

  showContent: any = { w1: true, w2: false, w3: false, w4: false, w5: false, w6: false };
  mainCategories = [];

  constructor(public navCtrl: NavController, private appService: AppServiceProvider, public storage: Storage) {
    this.init();
  }

  init() {
    console.log("init çalıştı");

    this.getAllContent();
    this.getCategories(); 
  }

  getAllContent() {
    this.appService.getAllContent().subscribe(result => {
      console.log("All Content: ", result);
      this.allContent = result.Result;
      for (var i = 0; i < this.allContent.length; i++) {
        this.allContent[i].IsFavorite = false;
        if (this.allContent[i].ContentWeek == 1)
          this.w1Contents.push(this.allContent[i]);
        else if (this.allContent[i].ContentWeek == 2)
          this.w2Contents.push(this.allContent[i]);
        else if (this.allContent[i].ContentWeek == 3)
          this.w3Contents.push(this.allContent[i]);
        else if (this.allContent[i].ContentWeek == 4)
          this.w4Contents.push(this.allContent[i]);
        else if (this.allContent[i].ContentWeek == 5)
          this.w5Contents.push(this.allContent[i]);
        else if (this.allContent[i].ContentWeek == 6)
          this.w6Contents.push(this.allContent[i]);
      }

      this.getlUserFavoriteList();
    });
  }

  getCategories() {
    this.appService.getContentCategories().subscribe(result => {
      console.log("result: ", result.Result);
      
      this.mainCategories = result.Result;
    });
  }

  showChildCategories(item) {
    //eğer collapse yapıda child'ı yok ise kapama açma işlemi yapmayıp direkt detayını göstermeye gidecek.
    if (item.HasChild) {
      item.IsOpened = !item.IsOpened;
    }
    else {
      this.showCategoryList(item);
    }

    console.log("test");
  }

  showCategoryList(item) {
    this.navCtrl.push(ContentListPage, {
      categoryItem: item
    });
  }


  showContentWeek(week) {

    if (week == 'w1') {
      this.showContent = { w1: !this.showContent.w1, w2: false, w3: false, w4: false, w5: false, w6: false };
    }
    else if (week == 'w2') {
      this.showContent = { w1: false, w2: !this.showContent.w2, w3: false, w4: false, w5: false, w6: false };
    }
    else if (week == 'w3') {
      this.showContent = { w1: false, w2: false, w3: !this.showContent.w3, w4: false, w5: false, w6: false };
    }
    else if (week == 'w4') {
      this.showContent = { w1: false, w2: false, w3: false, w4: !this.showContent.w4, w5: false, w6: false };
    }
    else if (week == 'w5') {
      this.showContent = { w1: false, w2: false, w3: false, w4: false, w5: !this.showContent.w5, w6: false };
    }
    else if (week == 'w6') {
      this.showContent = { w1: false, w2: false, w3: false, w4: false, w5: false, w6: !this.showContent.w6 };
    }
    else { }

    console.log(week);

  }

  doFavori(contentItem) {

    var memberID = localStorage.getItem('memberID');

    if (!contentItem.IsFavorite) {
      console.log("favori edildi");

      this.appService.addFavori(memberID, contentItem.BlogContentId).subscribe(result => {
        console.log("AddFavori", result);
        this.getlUserFavoriteList();
      });

      contentItem.IsFavorite = !contentItem.IsFavorite;
    }
    else {
      console.log("favoriden çıktı");

      this.appService.deleteFavori(memberID, contentItem.BlogContentId).subscribe(result => {
        console.log("RemoveFavori: ", result);
        this.getlUserFavoriteList();
      });

      contentItem.IsFavorite = !contentItem.IsFavorite;
    }
  }

  sendMessage(contentItem) {
    this.navCtrl.push(ContactPage, {
      content: contentItem
    });
  }

  getlUserFavoriteList() {
    var memberID = localStorage.getItem('memberID');

    this.appService.getMemberFavoriteList(memberID).subscribe(result => {
      console.log("Member's Favorite List: ", result);
      this.mergeFavoriteList(result.Result);
      this.appService.setFavoriteList(result.Result);
      this.favoritesContents = result.Result;
      this.favoritesContents.forEach(item => {
        item.IsFavorite = true;
        item.BlogContentId = item.ContentId;
      });
    });

  }

  mergeFavoriteList(favoriteList) {
    console.log(favoriteList);
    for (var i = 0; i < this.allContent.length; i++) {

      if (favoriteList.length == 0) {
        this.allContent[i].IsFavorite = false;
      }
      else {
        for (var j = 0; j < favoriteList.length; j++) {
          if (this.allContent[i].BlogContentId == favoriteList[j].ContentId) {
            this.allContent[i].IsFavorite = true;
            break;
          }
          else {
            this.allContent[i].IsFavorite = false;
          }
        }
      }
    }
  }

  goToContentDetail(item) {
    this.navCtrl.push(ContentDetailPage, {
      id: item.BlogContentId
    });
  }

  updateSchedule() {

    if (this.segment == 'all') {
      this.title = "Tüm İçerikler";
    }
    else {
      this.title = "Favori İçerikler";
      this.getlUserFavoriteList();
    }

  }



}
