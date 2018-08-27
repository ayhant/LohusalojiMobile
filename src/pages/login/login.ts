import { Component } from '@angular/core';
import { Platform, IonicPage, NavController, NavParams, ToastController, LoadingController, ModalController } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';

import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { MyApp } from '../../app/app.component';

import { AppServiceProvider } from '../../providers/app-service/app-service';
import { IsgivebirthPage } from '../isgivebirth/isgivebirth';
import { SurveyPage } from '../survey/survey';
import { InformationPage } from '../information/information';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login = { username: '', password: '', passwordAgain: '' };
  signup = { username: '', password: '', passwordAgain: '', membershipAgreement: false };
  forgotpassword = { username: '', password: '', passwordAgain: '', membershipAgreement: false };

  loading: any;
  submitted = false;
  showSignUp = false;
  showLogin = false;
  showForgotPassword = false;
  userAgreementInfo: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public platform: Platform,
    public device: Device,
    public appService: AppServiceProvider,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController) {
    platform.ready().then(() => {

      console.log("platform readey");
    });
    this.showForm('login');
    this.init();



  }

  init() {
    this.getUserAgreement();
  }

  getUserAgreement() {

    this.appService.getContentDetail("20").subscribe(result => {
      this.userAgreementInfo = result.Result;
      //console.log(this.userAgreementInfo);
    });

  }

  onLogin(isUsernameValid, isPasswordValid, loginObj) {
    this.submitted = true;


    if (isUsernameValid == true && isPasswordValid == true) {
      this.showLoadingIcon();

      //password olayı aktif edilecek
      this.appService.getPasswordEncode(this.login.password).subscribe(passResult => {
        console.log("Pass: ", passResult);

        this.appService.login(loginObj.username, passResult.Result).subscribe(result => {
          console.log(result);
          if (result.Result != false) {
            this.doLoginSteps(result);
          }
          else {
            this.loading.dismiss();
            this.showMessage(result.ErrorMessage);
          }
        });
      });

    }
  }

  onSignup(isUsernameValid, isPasswordValid, signupObj) {
    this.submitted = true;

    if (isUsernameValid == true && isPasswordValid == true) {

      if (this.signup.membershipAgreement) {
        if (this.signup.password.length >= 6) {
          this.showLoadingIcon();

          this.appService.getPasswordEncode(this.signup.password).subscribe(passResult => {
            console.log("Pass: ", passResult);

            this.appService.register(signupObj.username, passResult.Result, this.device.platform, this.device.manufacturer, this.device.model, this.device.uuid).subscribe(result => {
              console.log(result);

              if (result.Result == false || result.Result == -1 || result.Result == 0) {
                this.loading.dismiss();
                this.showMessage(result.ErrorMessage);
              }
              else {
                this.loading.dismiss();
                //this.storage.set('isUserLogged', 'true');
                this.storage.set('memberID', result.Result.MemberId);
                this.storage.set('member', result.Result);
                localStorage.setItem('memberID', result.Result.MemberId);

                //this.navCtrl.setRoot(MyApp);
                this.doLoginSteps(result);
              }
            });

          });


        }
        else {
          this.showMessage('Lütfen en az 6 haneli bir şifre seçiniz!');
        }
      }
      else {
        this.showMessage('Lütfen Kullanıcı Sözleşmesini İşaretleyiniz!');
      }
    }
  }

  onForgotPassword(isUsernameValid, isPasswordValid, forgotpasswordObj) {
    this.submitted = true;

    if (isUsernameValid == true && isPasswordValid == true) {

      if (this.forgotpassword.membershipAgreement) {
        if (this.forgotpassword.password.length >= 6) {
          this.showLoadingIcon();
  
          this.appService.getPasswordEncode(this.forgotpassword.password).subscribe(passResult => {
            console.log("Pass: ", passResult);
  
            this.appService.register(forgotpasswordObj.username, passResult.Result, this.device.platform, this.device.manufacturer, this.device.model, this.device.uuid).subscribe(result => {
              console.log(result);
  
              if (result.Result == false || result.Result == -1 || result.Result == 0) {
                this.loading.dismiss();
                this.showMessage(result.ErrorMessage);
              }
              else {
                this.loading.dismiss();
                this.storage.set('isUserLogged', 'true');
                this.storage.set('memberID', result.Result.MemberId);
                this.storage.set('member', result.Result);
  
                localStorage.setItem('memberID', result.Result.MemberId);
  
                //this.navCtrl.setRoot(MyApp);
                this.doLoginSteps(result);
              }
            });
          });
  
        }
        else {
          this.showMessage('Lütfen en az 6 haneli bir şifre seçiniz!');
        }
      }
      else {
        this.showMessage('Lütfen Kullanıcı Sözleşmesini İşaretleyiniz!');
      }

      
    }
  }

  showForm(formname: string) {
    this.showSignUp = false;
    this.showLogin = false;
    this.showForgotPassword = false;

    if (formname == "signup")
      this.showSignUp = true;

    else if (formname == "login")
      this.showLogin = true;

    else if (formname == "forgotpassword")
      this.showForgotPassword = true;
  }

  showMessage(msg) {

    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();

  }

  showLoadingIcon() {
    this.loading = this.loadingCtrl.create({
      content: 'Bekleyiniz...'
    });

    this.loading.present();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: this.userAgreementInfo.Title,
      message: this.userAgreementInfo.Body,
      buttons: [
        {
          text: 'KAPAT'
        }
      ]
    });
    prompt.present();
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

  doLoginSteps(result) {

    if (!result.Result.IsBlocked) { //bloklu değil ise
      if (result.Result.IsGiveBirth == true) {//doğum yaptı ise
        //admin tarafından onaylandı ise doğum haftasına bakacağız. 6 hafta olmamış ise anketleri doldurup doldurmadığına bakacağız. 1. ve 2. ankete sırası ile yönlendireeğiz.
        let birthDate = result.Result.GiveBirthDate == null ? new Date() : result.Result.GiveBirthDate;
        var d = new Date(birthDate).getTime();
        var today = new Date().getTime();
        var timeDiff = Math.abs(d - today);
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        this.loading.dismiss();

        this.appService.checkSurveyCompleted(result.Result.MemberId).subscribe(surveyResult => {
          console.log("Survey Result: ", surveyResult);
          let isFirstSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 1);
          let isSecondSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 2);
          let isThirdSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 3);
          let isFourthSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 4);

          if (diffDays < 42) { //eğer altı hafta olmamış ise 1. ve 2. anketi doldurup doldurmadığı kontrol edilecek
            this.storage.set('memberID', result.Result.MemberId);
            this.storage.set('member', result.Result);
            localStorage.setItem('memberID', result.Result.MemberId);

            if (isFirstSurveyCompleted) {
              if (isSecondSurveyCompleted) {

                if (result.Result.CanAccessContents == true) { //içeriğe erişebilenler buradan devam edecek.
                  this.storage.set('isUserLogged', 'true');
                  this.storage.set('memberID', result.Result.MemberId);
                  this.storage.set('member', result.Result);
                  localStorage.setItem('memberID', result.Result.MemberId);
                  
                  this.navCtrl.setRoot(MyApp);
                  
                }
                else {
                  //içeriğe erişemeyenler mesaj sayfasına yönlendirilecek.
                  this.navCtrl.push(InformationPage, {infoParam: "1-2"});
                  //this.navCtrl.push(InformationPage, {}, {animate: false});
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
          else { // eğer altı hafta olmuş ise 3. ve 4. anketi doldurup doldurmadığı kontrol edilecek.
            this.storage.set('memberID', result.Result.MemberId);
            this.storage.set('member', result.Result);
            localStorage.setItem('memberID', result.Result.MemberId);
            if (isFirstSurveyCompleted) {
              if (isSecondSurveyCompleted) {
                if (isThirdSurveyCompleted) {
                  if (isFourthSurveyCompleted) {

                    if(result.Result.CanAccessContents == true) {
                      this.storage.set('isUserLogged', 'true');
                      this.navCtrl.setRoot(MyApp);
                    }
                    else {
                      //içeriğe erişemeyenler mesaj sayfasına yönlendirilecek.
                      this.navCtrl.push(InformationPage, {infoParam: "3-4"});
                    }
                    
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
      }
      else {//doğum yapmadı ise
        this.loading.dismiss();
        localStorage.setItem('memberID', result.Result.MemberId);
        this.storage.set('member', result.Result);
        this.navCtrl.setRoot(IsgivebirthPage);
      }
    }
    else { //hesap blok edilmiş ise
      this.loading.dismiss();
      //this.showMessage("Hesabınız bloklanmıştır!");
      this.navCtrl.push(InformationPage, {infoParam: "block"}); 
    }
  }

}
