//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the AppServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppServiceProvider {

  apiUrl = 'http://api.lohusaloji.com/api';
  appCategories: any = [];
  userFavoriList: any = [];

  constructor(public http: Http, public httpClient: HttpClient) {
  }

  getContentCategories() {
    let metodURL = '/BlogContentCategory/GetAllForMobile';

    return this.http.get(this.apiUrl + metodURL)
      .map((res: Response) => res.json())
      .do((res: Response) => this.appCategories = res);
  }


  getCategoryContents(categoryId: string) {
    let metodURL = '/BlogContent/GetCategoryContentListForMobile/' + categoryId;

    return this.http.get(this.apiUrl + metodURL)
      .map((res: Response) => res.json());
  }

  getContentDetail(contentId: string) {
    let metodURL = '/BlogContent/Get/' + contentId;

    return this.http.get(this.apiUrl + metodURL)
      .map((res: Response) => res.json());
  }

  getAllContent() {
    let metodURL = '/BlogContent/GetAll';

    return this.http.get(this.apiUrl + metodURL)
      .map((res: Response) => res.json());
  }

  login(email, password) {
    let metodURL = '/Member/Login/' + email + '/' + password;

    return this.http.post(this.apiUrl + metodURL, null)
      .map((res: Response) => res.json());

  }

  register(email, password,os,brand,model,token) {
    let metodURL = '/Member/Register/' + email + '/' + password+'/'+os+'/'+brand+'/'+model+'/'+token+'';

    //Register/{email}/{password}/{operatingsystem}/{devicebrand}/{devicemodel}/{devicetoken}

    return this.http.post(this.apiUrl + metodURL, null)
      .map((res: Response) => res.json());

  }

  sentMessage(title, msg, memberId) {
    let metodURL = '/MemberMessage/AddForMobile/' + memberId + '/' + title + '/' + msg;
    return this.http.post(this.apiUrl + metodURL, null)
      .map((res: Response) => res.json());
  }

  sentMailMessage(msgID,memberId) {
    let metodURL = '/Email/AddForMobile/'+memberId+'/5/null/'+msgID+'/null';

    return this.http.post(this.apiUrl + metodURL, null)
      .map((res: Response) => res.json());
  }

  addFavori(memberId, contentId) {
    let metodURL = '/memberfavoritecontent/AddForMobile/' + memberId + '/' + contentId;

    return this.http.post(this.apiUrl + metodURL, null)
      .map((res: Response) => res.json());

  }

  deleteFavori(memberId, contentId) {
    let metodURL = '/memberfavoritecontent/DeleteForMobile/' + memberId + '/' + contentId;

    return this.http.get(this.apiUrl + metodURL)
      .map((res: Response) => res.json());
  }

  getMemberFavoriteList(memberId) {
    let metodURL = '/memberfavoritecontent/GetAllForMobile/' + memberId;

    return this.http.get(this.apiUrl + metodURL)
      .map((res: Response) => res.json());
  }

  saveSurvey(surveyTypeId, memberId) {
    let metodURL = '/surveymobileheader/AddHeaderForMobile/'+surveyTypeId+'/'+memberId

    return this.http.post(this.apiUrl + metodURL,null)
      .map((res: Response) => res.json());

  }

  saveSurveyAnswers(surveyHeaderId, question, answer,index){
    let metodURL = '/surveymobiledetail/AddDetailForMobile/'+surveyHeaderId+'/'+question+'/'+answer+'/'+index;

    return this.http.post(this.apiUrl + metodURL,null)
      .map((res: Response) => res.json());
  }

  setReadContent(memberId, contentId){
    let metodURL = '/BlogContent/SetReadContentForMobile/' + memberId + '/' + contentId;

    return this.http.get(this.apiUrl + metodURL,null)
      .map((res: Response) => res.json());
  }

  checkSurveyCompleted(memberId) {
    let metodURL = '/surveymobileheader/GetMemberSurveyHeaderListForMobile/'+memberId;

    return this.http.get(this.apiUrl + metodURL,null)
      .map((res: Response) => res.json());
  }

  saveBirthType(memberId,birthType,base64Data) {
    //base64 kalkınca
    //let metodURL = '/Email/AddForMobile/'+memberId+'/'+birthType+'/null/null/null/'+base64Data;
    let metodURL = '/Email/AddForMobile/'+memberId+'/'+birthType+'/null/null/null';

    return this.http.post(this.apiUrl + metodURL,null)
      .map((res: Response) => res.json());
  }

  setFavoriteList(favoriteList) {
    this.userFavoriList = favoriteList;
  }

  getFavoriteList() {
    return this.userFavoriList;
  }

  getUsersMessages(memberId) {
    
    let metodURL = '/MemberMessage/GetAllForMobile/'+memberId;

    return this.http.get(this.apiUrl + metodURL,null)
      .map((res: Response) => res.json());

  }

  setMemberPhoto(memberObj) {
    let metodURL = '/Member/MemberGaveBirth';

    let memberObjStr = JSON.stringify(memberObj);
    let key = Object.keys(memberObj);
    let xx = '';
    key.forEach(element => {
      xx += element + "=" + memberObj[element] + "&";
    });

    xx = xx.slice(0,xx.length-1)
    //console.log(xx);
    console.log(memberObjStr);
    var hdr = new Headers();
    hdr.append('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
    

    return this.http.post(this.apiUrl + metodURL, memberObjStr, {headers: hdr})
      .map((res: Response) => res.json());
  }

  getPasswordEncode(password) {
    let metodURL = '/member/GetEncryptedPassword/'+password;

    return this.http.get(this.apiUrl + metodURL,null)
      .map((res: Response) => res.json());
  }

  blockMember(memberId) {
    let methodURL = '/Member/BlockMember/'+memberId;

    return this.http.post(this.apiUrl + methodURL, null)
      .map((res: Response) => res.json());
  }

  getAppVersion() {
    let methodURL = '/ApplicationBase/GetApplicationParameters';

    return this.http.get(this.apiUrl + methodURL, null)
      .map((res: Response) => res.json());
  }

}
