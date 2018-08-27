import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

import { AppServiceProvider } from '../../providers/app-service/app-service';


@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {

  name: string = "";
  infoParam: string = "";
  messages: string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public appService: AppServiceProvider) {
    this.infoParam = this.navParams.get('infoParam');
    this.init();
  }

  init() {
    this.storage.get('member').then(member => {
      this.name = member.FullName;
      console.log(member);

      if (this.infoParam == "1-2") {
        this.messages = "Üye girişi yapıp anketleri doldurduğunuz için teşekkür ederiz. Şimdilik lohusalık süreciniz tamamlana kadar bekleyip, tamamladığınızda son iki anketimizi de doldurmanızı rica edeceğiz. <br /><br /> Tüm üyelerimiz bu süreci tamamladığında uygulama tamamen herkesin kullanımına açılacaktır."
      }
      else if (this.infoParam == "3-4") {
        this.messages = "Lohusalık sürecinizi tamamladınız tebrik ederiz. Tüm anketleri de doldurdunuz ilginiz için teşekkürler. Şimdi uygulamadaki herkesin sürecini tamamlaması için kısa bir süre uygulamaya erişiminiz kısıtlanmıştır. <br /><br /> Tüm üyelerimiz bu süreci tamamladığında uygulama tamamen tüm üyelerimize açılacaktır.";
      }
      else if (this.infoParam == "block") {
        //this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
        this.checkSurvey(member);
      }


    });
  }

  checkSurvey(member) {
    this.appService.checkSurveyCompleted(member.MemberId).subscribe(surveyResult => {
      let isFirstSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 1);
      let isSecondSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 2);
      let isThirdSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 3);
      let isFourthSurveyCompleted = this.checkSurveyCompleted(surveyResult.Result, 4);

      if(isFirstSurveyCompleted) {
        if(isSecondSurveyCompleted){
          if(isThirdSurveyCompleted){
            if(isFourthSurveyCompleted){
              this.messages = "Lohusalık sürecinizi tamamladınız tebrik ederiz. Tüm anketleri de doldurdunuz ilginiz için teşekkürler. Şimdi uygulamadaki herkesin sürecini tamamlaması için kısa bir süre uygulamaya erişiminiz kısıtlanmıştır. <br /><br /> Tüm üyelerimiz bu süreci tamamladığında uygulama tamamen tüm üyelerimize açılacaktır.";
            }
            else {
              this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
            }
          }
          else {
            this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
          }
        }
        else {
          this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
        }
      }
      else {
        this.messages = "Hesabınız bir süreliğine kullanım dışıdır. Bu durum uyugulamayı aktif kullanmayışınızdan kaynaklı olabilir. <br /><br /> Detaylı bilgi için uygulama yöneticisiyle irtibata geçebilirsiniz.";
      }

    });
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

  okBtnClick() {
    this.navCtrl.push(LoginPage);
  }


}
