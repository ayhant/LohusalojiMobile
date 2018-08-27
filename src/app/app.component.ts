import { Component, ViewChild } from '@angular/core';
import { Platform, IonicPage, NavController, Nav, MenuController, Keyboard, AlertController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { AppVersion } from '@ionic-native/app-version';
import { SafariViewController } from '@ionic-native/safari-view-controller';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { ContentListPage } from '../pages/content-list/content-list';
import { ContactPage } from '../pages/contact/contact';
import { SurveyPage } from '../pages/survey/survey';
import { SettingsPage } from '../pages/settings/settings';
import { IsgivebirthPage } from '../pages/isgivebirth/isgivebirth';


import { AppServiceProvider } from '../providers/app-service/app-service';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;
  @ViewChild(Nav) navCtrl: Nav;

  mainCategories: any = [];
  userNameSurname: string = '';

  public contentCategories: any = [];
  public motherContentCategories: any = [];
  public babyContentCategories: any = [];
  public fatherContentCategories: any = [];

  constructor(public platform: Platform,
    public storage: Storage,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    keyboard: Keyboard,
    private appService: AppServiceProvider,
    private menuController: MenuController,
    public appVersion: AppVersion,
    public alertCtrl: AlertController,
    public safariViewController: SafariViewController,
    public device: Device) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      keyboard.hideFormAccessoryBar(false);

      /* this.storage.set('hasSeenTutorial', 'true');
      this.storage.get('hasSeenTutorial').then(res => {
        
        console.log("Storage: ",res);
      }) */
      this.init();
      this.storage.get('isUserLogged').then(result => {
        if (result) {
          //kullanıcı daha önce giriş yapmış ise
          //this.rootPage = HomePage;

          this.storage.get('member').then(memberResult => {
            console.log(memberResult);
            this.userNameSurname = memberResult.FullName;
            this.doLoginSteps(memberResult);
          });
        }
        else  {
          //kullanıcı giriş yapmamış ise
          this.rootPage = LoginPage;
        }
      });
    });
  }



  public init() {
    this.checkVersion();
    this.getCategories();
  }

  checkVersion() {
    
    this.appService.getAppVersion().subscribe(versionResult => {
      console.log(versionResult.Result.CurrentMobileApplicationVersion);
      let currentVersion = versionResult.Result.CurrentMobileApplicationVersion;

      if(this.platform.is('cordova')){
        this.appVersion.getVersionNumber().then(version => {
          console.log("Version: ",version);
          localStorage.setItem('version', version);
  
          if(version == currentVersion) {//uygulama güncel değil
            this.showAlertMessage();
          }
        });
      }
    });
  }

  getCategories() {
    this.appService.getContentCategories().subscribe(result => {
      console.log("result: ", result.Result);

      this.mainCategories = result.Result;
      //this.setCategories(result.Result);
      //this.test(result.Result);
    });
  }

  showChildCategories(item) {
    //eğer collapse yapıda child'ı yok ise kapama açma işlemi yapmayıp direkt detayını göstermeye gidecek.
    if (item.HasChild) {
      item.IsOpened = !item.IsOpened;
    }
    else {
      this.showCategoryList(item);
      this.menuController.close();
    }

    console.log("test");
  }


  showCategoryList(item) {
    this.navCtrl.push(ContentListPage, {
      categoryItem: item
    });
  }

  test(data) {
    this.mainCategories = data.filter(x => x.ParentCategoryId == null);
    this.mainCategories.forEach(item => {
      item.Childs = [];
    });

    data.forEach(item => {
      item.isShown = false;
      if (item.ParentCategoryId != null) {
        item.Childs = [];
        this.setChildToParent(this.mainCategories, item);
      }

    });

    console.log("main", this.mainCategories);

  }

  setChildToParent(parentList, item) {

    for (var x = 0; x < parentList.length; x++) {
      if (parentList[x].CategoryId == item.ParentCategoryId) {
        parentList[x].Childs.push(item);
        return;
      }
    }

  }

  setCategories(data) {
    if (data != null) {
      /* this.mainCategories = data.filter(x => x.ParentCategoryId == null);

      data.forEach(item => {
        if(item.ParentCategoryId != null){
          var xy = this.mainCategories.filter(x => x.CategoryId == item.ParentCategoryId)[0];
          console.log("xy", xy);
        }
        
      }); */

      this.contentCategories = data;

      //anne kategorisi için düzenleme
      for (var i = 0; i < this.contentCategories.length; i++) {
        if (data[i].ParentCategoryId == 24) {
          this.motherContentCategories.push(data[i]);
          for (var j = 0; j < this.contentCategories.length; j++) {
            if (this.contentCategories[i].CategoryId == this.contentCategories[j].ParentCategoryId) {
              this.motherContentCategories.push(this.contentCategories[j]);

              for (var k = 0; k < this.contentCategories.length; k++) {
                if (this.contentCategories[j].CategoryId == this.contentCategories[k].ParentCategoryId)
                  this.motherContentCategories.push(this.contentCategories[k]);
              }
            }
          }
        }
      }

      //bebek kategorisi için düzenleme
      for (var ii = 0; ii < this.contentCategories.length; ii++) {
        if (data[ii].ParentCategoryId == 25) {
          this.babyContentCategories.push(data[ii]);
          for (var jj = 0; jj < this.contentCategories.length; jj++) {
            if (this.contentCategories[ii].CategoryId == this.contentCategories[jj].ParentCategoryId) {
              this.babyContentCategories.push(this.contentCategories[jj]);

              for (var kk = 0; kk < this.contentCategories.length; kk++) {
                if (this.contentCategories[jj].CategoryId == this.contentCategories[kk].ParentCategoryId)
                  this.babyContentCategories.push(this.contentCategories[kk]);
              }
            }
          }
        }
      }

      //baba kategorisi için düzenleme
      for (var iii = 0; iii < this.contentCategories.length; iii++) {
        if (data[iii].ParentCategoryId == 26) {
          this.fatherContentCategories.push(data[iii]);
          for (var jjj = 0; jjj < this.contentCategories.length; jjj++) {
            if (this.contentCategories[iii].CategoryId == this.contentCategories[jjj].ParentCategoryId) {
              this.fatherContentCategories.push(this.contentCategories[jjj]);

              for (var kkk = 0; kkk < this.contentCategories.length; kkk++) {
                if (this.contentCategories[jjj].CategoryId == this.contentCategories[kkk].ParentCategoryId)
                  this.fatherContentCategories.push(this.contentCategories[kkk]);
              }
            }
          }
        }
      }
    }

    console.log(this.motherContentCategories);
    console.log(this.fatherContentCategories);
    console.log(this.babyContentCategories);

  }

  logout() {
    this.storage.remove('isUserLogged');
    localStorage.clear();
    localStorage.setItem('isLoginBefore',"true");
    console.log("logout olundu");
    this.navCtrl.push(LoginPage);
    this.rootPage = LoginPage;

  }

  goToContactPage() {
    this.navCtrl.push(ContactPage);
  }

  goToSettingsPage() {
    this.navCtrl.push(SettingsPage);
  }

  goToSurveyPage() {
    this.navCtrl.push(SurveyPage, { surveyType: '1' });
  }

  goToAboutPage(parameter) {
    this.navCtrl.push(AboutPage, { 'Page': parameter });
  }

  goToHelpPage() {
    this.navCtrl.push(HelpPage);
  }


  doLoginSteps(result) {

    if (!result.IsBlocked) { //bloklu değil ise
      if (result.IsGiveBirth == true) {//doğum yaptı ise
        //admin tarafından onaylandı ise doğum haftasına bakacağız. 6 hafta olmamış ise anketleri doldurup doldurmadığına bakacağız. 1. ve 2. ankete sırası ile yönlendireeğiz.
        let birthDate = result.GiveBirthDate == null ? new Date() : result.GiveBirthDate;
        var d = new Date(birthDate).getTime();
        var today = new Date().getTime();

        var timeDiff = Math.abs(d - today);
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));


        //this.loading.dismiss();

        this.appService.checkSurveyCompleted(result.MemberId).subscribe(surveyResult => {
          console.log("Survey Result: ", surveyResult);
          let isFirstSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 1);
          let isSecondSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 2);
          let isThirdSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 3);
          let isFourthSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 4);

          if (diffDays < 42) { //eğer altı hafta olmamış ise 1. ve 2. anketi doldurup doldurmadığı kontrol edilecek
            if (isFirstSurveyCompleted) {
              if (isSecondSurveyCompleted) {
                this.storage.set('isUserLogged', 'true');
                this.storage.set('memberID', result.MemberId);
                this.storage.set('member', result);
                localStorage.setItem('memberID', result.MemberId);
                this.navCtrl.setRoot(HomePage);

                this.checkIsFirstLogin();
              }
              else { //2. anketi açtıracağız
                this.navCtrl.setRoot(SurveyPage, { surveyType: 2, comeTo: "login" });
              }
            }
            else { //1. anketi açtıracağız
              this.navCtrl.setRoot(SurveyPage, { surveyType: 1, comeTo: "login" });
            }
          }
          else { // eğer altı hafta olmuş ise 3. ve 4. anketi doldurup doldurmadığı kontrol edilecek.
            this.storage.set('memberID', result.MemberId);
            this.storage.set('member', result);
            localStorage.setItem('memberID', result.MemberId);
            if (isFirstSurveyCompleted) {
              if (isSecondSurveyCompleted) {
                if (isThirdSurveyCompleted) {
                  if (isFourthSurveyCompleted) {
                    this.storage.set('isUserLogged', 'true');
                    this.navCtrl.setRoot(HomePage);

                    this.checkIsFirstLogin();
                  }
                  else { //4. anketi açtıracağız
                    this.navCtrl.setRoot(SurveyPage, { surveyType: 4, comeTo: "login" });
                  }
                }
                else { //3. anketi açtıracağız
                  this.navCtrl.setRoot(SurveyPage, { surveyType: 3, comeTo: "login" });
                }
              }
              else { //2. anketi açtıracağız
                this.navCtrl.setRoot(SurveyPage, { surveyType: 2, comeTo: "login" });
              }
            }
            else { //1. anketi açtıracağız
              this.navCtrl.setRoot(SurveyPage, { surveyType: 1, comeTo: "login" });
            }
          }



        });



        /* this.storage.set('isUserLogged', 'true');
        this.storage.set('memberID', result.Result.MemberId);
        this.storage.set('member', result.Result);
        localStorage.setItem('memberID', result.Result.MemberId);
        this.navCtrl.setRoot(MyApp); */

      }
      else {//doğum yapmadı ise
        //this.loading.dismiss();
        localStorage.setItem('memberID', result.MemberId);
        this.navCtrl.setRoot(IsgivebirthPage);
      }
    }
    else { //hesap blok edilmiş ise
      //this.loading.dismiss();
      //this.showMessage("Hesabınız bloklanmıştır!");
      this.navCtrl.setRoot(LoginPage);
    }
  }

  checkSurveyCompleted(data, surveyId) {
    let flag = false;

    data.forEach(item => {
      if (item.SurveyTypeId == surveyId) {
        flag = true;
      }
    });

    return flag;

  }

  checkIsFirstLogin() {
    let isFirst = localStorage.getItem('isLoginBefore');

    if(isFirst == null) {
      localStorage.setItem('isLoginBefore',"true");
      this.navCtrl.push(HelpPage);
    }
    else {
      
    }


  }

  private showAlertMessage() {
    let alert = this.alertCtrl.create({
      title: 'Güncelleme',
      subTitle: 'Yeni bir güncelleme mevcut!',
      enableBackdropDismiss: false,
      buttons: [{
        text: 'Güncelle',
        handler: () => {
          
          //güncellemek için yapılacak olan işlemler burada olacak.
          
          if(this.platform.is('ios')){
            this.openUrl('http://api.lohusaloji.com/MobileApps/Android/app.ipa');
          }
          else {
            this.openUrl('http://api.lohusaloji.com/MobileApps/Android/app.apk');
          }

          return false;
        }
      }]
    });
    alert.present();
  }

  openUrl(url) {

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

