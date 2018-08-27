import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, MenuController } from 'ionic-angular';

import { AppServiceProvider } from '../../providers/app-service/app-service';
import { MyApp } from '../../app/app.component';
import { Storage } from '@ionic/storage';

import { InformationPage } from '../information/information';


@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {

  loading:any;
  surveyTypeID: any;
  showSurvey: any = { first: true, second: false, third: false, fourth: false };

  survey1Questions = ["1. Yaşınız", "2. Kaç yıllık evlisiniz", "3. Eğitim durumunuz", "4. Eşinizin eğitim durumu", "5. Mesleğiniz", "6- Eşinizin Mesleği", "7. Sağlık Güvenceniz", "8. Ekonomik durumunuzu nasıl tanımlarsınız", "9. Yaşadığınız yerleşim yeri neresidir", "10. Aile tipiniz nedir", "11. Kronik bir hastalığınız varsa açıklayın", "12. Sürekli kullandığınız ilacınız varsa belirtin", "13. İnterneti kaç yıldır kullanılıyorsunuz", "14. Bir günde ortalama internete ne kadar süre geçiriyorsunuz", "15. İnterneti ne amaçla kullanıyorsunuz (Birden fazla cevap verebilirsiniz)", "16. İnternette hangi sayfaların bilgisini güvenli buluyorsunuz (Birden fazla cevap verebilirsiniz)", "17. Kaç kez gebe kaldınız", "18. Kaç kez doğum yaptınız", "19. Yaşayan kaç çocuğunuz var", "20. Ölü doğum yaptıysanız sayısı", "21. Düşük yaptıysanız sayısı", "22. Küretaj olduysanız sayısı", "23. Gebeliğiniz planlı bir gebelik miydi", "24. Gebeliğinizi isteme durumunuz", "25. Gebelikte doktor kontrollerinize düzenli gittiniz mi", "26. Gebeliğinizle ilgili olarak hangi kurumakurumlara kontrole gittiniz", "27. Gebeliğiniz süresince bebek bakımı-annelik ve emzirmeyle ilgili eğitim programına katıldıysanız açıklayınız", "28. Bebek bakımı, annelik ve ebeveynlikle ile ilgili bilgilerinizi nereden aldınız", "29. Son doğum şekliniz nedir", "30. Doğum şekliniz tatmin edici miydi", "31.Eşinizin gebelik ve doğum sürecine yeterli katıldığını düşünüyor musunuz", "32. Bebeğinizin cinsiyeti nedir", "33. Bebeğinizin cinsiyeti tercih ettiğiniz cinsiyet midir", "34. Bebeğin doğum tarihi", "35. Bebeğin gestasyon yaşı", "36. Doğum kilosu", "37. Doğum sırasında herhangi bir sorun yaşadıysanız belirtiniz", "38. Doğum sırasında bebeğe herhangi bir müdahalede bulunulmuşsa açıklayınız", "39. Bebeğin beslenme şekli nedir (Birden fazla cevap verebilirsiniz)", "40. Taburculuğunuzdan sonra evde yapılması gereken kendinize ait özel bir bakım gereksinimi varsa belirtiniz", "41. Bebeğin taburculuğundan sonra evde yapılması gereken özel bir bakım gereksinimi varsa belirtiniz"];

  survey2Questions = ["1. Sağlığınız", "2. Ağrı düzeyiniz", "3. Günlük Aktivitelerinizdeki Enerji Düzeyiniz", "4. Yaşamınızı Kontrol Edebilme Düzeyiniz", "5. Yardım Almadan Kendinize Bakım Verme Yeterliliğiniz", "6. Fiziksel Görünüşünüz", "7. Uyku Düzeyiniz", "8. Memeleriniz", "9. Doğum nedeni ile olan dikişleriniz", "10. Cinsel Yaşamınız", "11. İç Huzurunuz", "12. Genel Olarak Mutluluğunuz", "13.Genel Olarak Yaşamınız", "14. Yaşamınızdaki Kaygı Düzeyiniz", "15.A. Eşinizden Aldığınız Duygusal Destek", "15.B. Ailenizden Aldığınız Duygusal Destek", "15.C. Arkadaşınızdan ya da Diğer İnsanlardan Aldığınız Duygusal Destek", "16. Eşiniz İle İlişkiniz", "17. Aile Sorumluluklarını Yerine Getirme yeterliliğiniz", "18. Bebeğinizin Sağlığı", "19. Çocuklarınızın Bakımında Yardım Alma Durumunuz", "20. Çocuklar İçin Ayırdığınız Zaman", "21. Ev İşleri için Ayırdığınız Zaman", "22. Arkadaşlarınızakrabalarınız İçin Ayırdığınız Zaman", "23. Eşiniz İçin Ayırdığınız Zaman", "24. Kendiniz İçin ayırdığınız Zaman", "25. Yeni Bebeğinizi Beslenme yeterliliğiniz", "26. Eşinizin Sağlığı", "27. Yaşamınızdaki Günlük İşleriniz", "28. Yaşadığınız Ev", "29. Komşularınız", "30. Ekonomik Bağımsızlığınız", "31. Ekonomik Harcamalarınızı Karşılama Yeterliliğiniz", "32. Tıbbi Hizmete Ulaşım", "33. İstenildiği Zaman Herhangi Bir Araca Ulaşım", "34.A. Evdeki Yaşam Koşullarınız (Mal Varlığınız)", "34.B. Evdeki Yaşam Koşullarınız (Mali Durumunuz)", "34.C. Evdeki Yaşam Koşullarınız (Çevresel Koşullarınız)", "35.A. İşÇalışma (Eşinizin İşi)", "35.B. İşÇalışma (Kendi İşiniz)", "1. Sağlığınız", "2. Ağrı düzeyiniz", "3. Günlük Aktivitelerinizdeki Enerji Düzeyiniz", "4. Yaşamınızı Kontrol Edebilme Düzeyiniz", "5. Yardım Almadan Kendinize Bakım Verme Yeterliliğiniz", "6. Fiziksel Görünüşünüz", "7. Uyku Düzeyiniz", "8. Memeleriniz", "9. Doğum nedeni ile olan dikişleriniz", "10. Cinsel Yaşamınız", "11. İç Huzurunuz", "12. Genel Olarak Mutluluğunuz", "13.Genel Olarak Yaşamınız", "14. Yaşamınızdaki Kaygı Düzeyiniz", "15.A. Eşinizden Aldığınız Duygusal Destek", "15.B. Ailenizden Aldığınız Duygusal Destek", "15.C. Arkadaşınızdan ya da Diğer İnsanlardan Aldığınız Duygusal Destek", "16. Eşiniz İle İlişkiniz", "17. Aile Sorumluluklarını Yerine Getirme yeterliliğiniz", "18. Bebeğinizin Sağlığı", "19. Çocuklarınızın Bakımında Yardım Alma Durumunuz", "20. Çocuklar İçin Ayırdığınız Zaman", "21. Ev İşleri için Ayırdığınız Zaman", "22. Arkadaşlarınızakrabalarınız İçin Ayırdığınız Zaman", "23. Eşiniz İçin Ayırdığınız Zaman", "24. Kendiniz İçin ayırdığınız Zaman", "25. Yeni Bebeğinizi Beslenme yeterliliğiniz", "26. Eşinizin Sağlığı", "27. Yaşamınızdaki Günlük İşleriniz", "28. Yaşadığınız Ev", "29. Komşularınız", "30. Ekonomik Bağımsızlığınız", "31. Ekonomik Harcamalarınızı Karşılama Yeterliliğiniz", "32. Tıbbi Hizmete Ulaşım", "33. İstenildiği Zaman Herhangi Bir Araca Ulaşım", "34.A. Evdeki Yaşam Koşullarınız (Mal Varlığınız)", "34.B. Evdeki Yaşam Koşullarınız (Mali Durumunuz)", "34.C. Evdeki Yaşam Koşullarınız (Çevresel Koşullarınız)", "35.A. İşÇalışma (Eşinizin İşi)", "35.B. İşÇalışma (Kendi İşiniz)"];


  survey3Questions = ["1. Sağlığınız", "2. Ağrı düzeyiniz", "3. Günlük Aktivitelerinizdeki Enerji Düzeyiniz", "4. Yaşamınızı Kontrol Edebilme Düzeyiniz", "5. Yardım Almadan Kendinize Bakım Verme Yeterliliğiniz", "6. Fiziksel Görünüşünüz", "7. Uyku Düzeyiniz", "8. Memeleriniz", "9. Doğum nedeni ile olan dikişleriniz", "10. Cinsel Yaşamınız", "11. İç Huzurunuz", "12. Genel Olarak Mutluluğunuz", "13.Genel Olarak Yaşamınız", "14. Yaşamınızdaki Kaygı Düzeyiniz", "15.A. Eşinizden Aldığınız Duygusal Destek", "15.B. Ailenizden Aldığınız Duygusal Destek", "15.C. Arkadaşınızdan ya da Diğer İnsanlardan Aldığınız Duygusal Destek", "16. Eşiniz İle İlişkiniz", "17. Aile Sorumluluklarını Yerine Getirme yeterliliğiniz", "18. Bebeğinizin Sağlığı", "19. Çocuklarınızın Bakımında Yardım Alma Durumunuz", "20. Çocuklar İçin Ayırdığınız Zaman", "21. Ev İşleri için Ayırdığınız Zaman", "22. Arkadaşlarınızakrabalarınız İçin Ayırdığınız Zaman", "23. Eşiniz İçin Ayırdığınız Zaman", "24. Kendiniz İçin ayırdığınız Zaman", "25. Yeni Bebeğinizi Beslenme yeterliliğiniz", "26. Eşinizin Sağlığı", "27. Yaşamınızdaki Günlük İşleriniz", "28. Yaşadığınız Ev", "29. Komşularınız", "30. Ekonomik Bağımsızlığınız", "31. Ekonomik Harcamalarınızı Karşılama Yeterliliğiniz", "32. Tıbbi Hizmete Ulaşım", "33. İstenildiği Zaman Herhangi Bir Araca Ulaşım", "34.A. Evdeki Yaşam Koşullarınız (Mal Varlığınız)", "34.B. Evdeki Yaşam Koşullarınız (Mali Durumunuz)", "34.C. Evdeki Yaşam Koşullarınız (Çevresel Koşullarınız)", "35.A. İşÇalışma (Eşinizin İşi)", "35.B. İşÇalışma (Kendi İşiniz)", "1. Sağlığınız", "2. Ağrı düzeyiniz", "3. Günlük Aktivitelerinizdeki Enerji Düzeyiniz", "4. Yaşamınızı Kontrol Edebilme Düzeyiniz", "5. Yardım Almadan Kendinize Bakım Verme Yeterliliğiniz", "6. Fiziksel Görünüşünüz", "7. Uyku Düzeyiniz", "8. Memeleriniz", "9. Doğum nedeni ile olan dikişleriniz", "10. Cinsel Yaşamınız", "11. İç Huzurunuz", "12. Genel Olarak Mutluluğunuz", "13.Genel Olarak Yaşamınız", "14. Yaşamınızdaki Kaygı Düzeyiniz", "15.A. Eşinizden Aldığınız Duygusal Destek", "15.B. Ailenizden Aldığınız Duygusal Destek", "15.C. Arkadaşınızdan ya da Diğer İnsanlardan Aldığınız Duygusal Destek", "16. Eşiniz İle İlişkiniz", "17. Aile Sorumluluklarını Yerine Getirme yeterliliğiniz", "18. Bebeğinizin Sağlığı", "19. Çocuklarınızın Bakımında Yardım Alma Durumunuz", "20. Çocuklar İçin Ayırdığınız Zaman", "21. Ev İşleri için Ayırdığınız Zaman", "22. Arkadaşlarınızakrabalarınız İçin Ayırdığınız Zaman", "23. Eşiniz İçin Ayırdığınız Zaman", "24. Kendiniz İçin ayırdığınız Zaman", "25. Yeni Bebeğinizi Beslenme yeterliliğiniz", "26. Eşinizin Sağlığı", "27. Yaşamınızdaki Günlük İşleriniz", "28. Yaşadığınız Ev", "29. Komşularınız", "30. Ekonomik Bağımsızlığınız", "31. Ekonomik Harcamalarınızı Karşılama Yeterliliğiniz", "32. Tıbbi Hizmete Ulaşım", "33. İstenildiği Zaman Herhangi Bir Araca Ulaşım", "34.A. Evdeki Yaşam Koşullarınız (Mal Varlığınız)", "34.B. Evdeki Yaşam Koşullarınız (Mali Durumunuz)", "34.C. Evdeki Yaşam Koşullarınız (Çevresel Koşullarınız)", "35.A. İşÇalışma (Eşinizin İşi)", "35.B. İşÇalışma (Kendi İşiniz)"];

  survey4Questions = ["1. İçeriğin kapsamı öğrenmeyi sağlayacak yeterliliktedir", "2. Materyal değerlendirme bölümü içermektedir", "3. Materyaldeki metinler ayrı bir bölümde çıktısı alınabilecek şekilde tasarlanmıştır", "4. 1Vietinlerle,	etkileşimli	uygulamalar	eşit	ağırlıkta dağılımı göstermektedir", "5. Materyalde eğlenceli, dikkat çekici bilgiler, resimler ya da uyarıcı işaretler eklenmiştir", "6. Materyal farklı öğrenme biçimleri (görsel, işitsel...) içermektedir", "7. Materyallerin içeriği öğrenci kitaplarındaki bilgilerle bütünleşmiştir", "8. Hazırlanan yazılım Web üzerinden dersi anlamaya olanak vermektedir", "9. Öğretmen dersi bu materyal üzerinden kolayca işleyebilmektedir", "10. Materyal içerisindeki çoklu ortam özelikleri (grafik, metin, animasyonlar, video vs) konuya uygun olarak kullanılmıştır", "11. Ekran görünümü ilk bakışta materyalin web tabanlı eğitim için kullanılabileceğini hissettirmektedir", "12. Öğretim materyalinin organizasyonel yapısı açık ve sistematiktir", "13. Öğretim materyalinde sunulan olaylar ve durumlar öğrencilerin bilişsel yeteneklerine uygundur", "14. Materyal web tabanlı eğitimde kullanılmak için uygundur", "15. Materyal aktarılacak konuya uygun olacak şekilde tasarlanmıştır", "16. Materyal, öğretmenin ders materyali olarak kullanımına uygundur", "17. Grafik, ses, animasyon gibi çoklu odam öğeleri yeterli miktarda kullanılmıştır", "18. Kullanılan yazılım öğrenmenin amacına ulaşmasını sağlamaktadır", "19. Bilgiler uygun resimlerle açık şekilde görselleştirilmiştir", "20. Meteraldeki şekillerde ver resimlerde gerçekçi canlı renkler kullanılmıştır", "21. Meteryalde eğelneceli şekiller, görseller vs. kullanılmışıtr", "22. Animasyon tasarımı öğreneme isteiğini artırmaktadır", "23. Yazılım ekranları arasında tutarlıklı vardır", "24. Ekranda kullanılan renkler uyumludur", "25. VideolarınAnimasyonların niteliği açık ve iyidir", "26. Ekranlar arası geçiş kullanıcya bağlıdır", "27. Meteryalde yardım menüsü bulunmaktadır", "28. Video iletimi düzgün ve sorunsuz çalışmaktadır", "29. Meteryal öğrenci kullanımına izin verecek yetkilendirmelere sahiptir", "30. Arayüz tasarımı memnun edici ve estetiktir", "31. Materyalin giriş sayfasında gerekli yönlendirmeler yer almaktadır", "32. Animasyon ve simülasyonlar gerçeğe uygundur", "33. Materyal içerisindeki etkileşim düzeyi uygundur", "34. Materyal tüm donanımlarla birlikte kullanılmya uygundur"];


  survey1 = {
    q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15: '', q16: '', q17: '', q18: ''
    , q19: '', q20: '', q21: '', q22: '', q23: '', q24: '', q25: '', q26: '', q27: '', q28: '', q29: '', q30: '', q31: '', q32: '', q33: '', q34: '', q35: '', q36: ''
    , q37: '', q38: '', q39: '', q40: '', q41: ''
  };

  survey2 = {
    p1q1: '', p1q2: '', p1q3: '', p1q4: '', p1q5: '', p1q6: '', p1q7: '', p1q8: '', p1q9: '', p1q10: '', p1q11: '', p1q12: '', p1q13: '', p1q14: '', p1q15a: '', p1q15b: '', p1q15c: '', p1q16: '', p1q17: '', p1q18: ''
    , p1q19: '', p1q20: '', p1q21: '', p1q22: '', p1q23: '', p1q24: '', p1q25: '', p1q26: '', p1q27: '', p1q28: '', p1q29: '', p1q30: '', p1q31: '', p1q32: '', p1q33: '', p1q34a: '', p1q34b: '', p1q34c: ''
    , p1q35a: '', p1q35b: '', p2q1: '', p2q2: '', p2q3: '', p2q4: '', p2q5: '', p2q6: '', p2q7: '', p2q8: '', p2q9: '', p2q10: '', p2q11: '', p2q12: '', p2q13: '', p2q14: '', p2q15a: '', p2q15b: '', p2q15c: '', p2q16: '', p2q17: '', p2q18: ''
    , p2q19: '', p2q20: '', p2q21: '', p2q22: '', p2q23: '', p2q24: '', p2q25: '', p2q26: '', p2q27: '', p2q28: '', p2q29: '', p2q30: '', p2q31: '', p2q32: '', p2q33: '', p2q34a: '', p2q34b: '', p2q34c: ''
    , p2q35a: '', p2q35b: ''
  };

  survey3 = {
    p1q1: '', p1q2: '', p1q3: '', p1q4: '', p1q5: '', p1q6: '', p1q7: '', p1q8: '', p1q9: '', p1q10: '', p1q11: '', p1q12: '', p1q13: '', p1q14: '', p1q15a: '', p1q15b: '', p1q15c: '', p1q16: '', p1q17: '', p1q18: ''
    , p1q19: '', p1q20: '', p1q21: '', p1q22: '', p1q23: '', p1q24: '', p1q25: '', p1q26: '', p1q27: '', p1q28: '', p1q29: '', p1q30: '', p1q31: '', p1q32: '', p1q33: '', p1q34a: '', p1q34b: '', p1q34c: ''
    , p1q35a: '', p1q35b: '', p2q1: '', p2q2: '', p2q3: '', p2q4: '', p2q5: '', p2q6: '', p2q7: '', p2q8: '', p2q9: '', p2q10: '', p2q11: '', p2q12: '', p2q13: '', p2q14: '', p2q15a: '', p2q15b: '', p2q15c: '', p2q16: '', p2q17: '', p2q18: ''
    , p2q19: '', p2q20: '', p2q21: '', p2q22: '', p2q23: '', p2q24: '', p2q25: '', p2q26: '', p2q27: '', p2q28: '', p2q29: '', p2q30: '', p2q31: '', p2q32: '', p2q33: '', p2q34a: '', p2q34b: '', p2q34c: ''
    , p2q35a: '', p2q35b: ''
  };

  survey4 = {
    q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15: '', q16: '', q17: '', q18: ''
    , q19: '', q20: '', q21: '', q22: '', q23: '', q24: '', q25: '', q26: '', q27: '', q28: '', q29: '', q30: '', q31: '', q32: '', q33: '', q34: ''
  };

  survey1Additional = { q5: '', q6: '', q11: '', q12: '', q20: '', q21: '', q22: '', q27: '', q37: '', q38: '', q40: '', q41: '' };

/*   survey1 = {
    q1: '3', q2: '3', q3: 'Lise', q4: 'Lise', q5: 'İşçi', q6: 'İşçi', q7: 'Var', q8: 'Gelirim giderimden az', q9: 'İl', q10: 'Geniş aile', q11: 'Hayır', q12: 'Hayır', q13: '3', q14: 'Günde 1 saat', q15: 'Bilgi öğrenmek', q16: 'Blog', q17: '4', q18: '3'
    , q19: '4', q20: 'Hayır', q21: 'Hayır', q22: 'Hayır', q23: 'Hayır', q24: 'İsteniyor', q25: 'Hayır', q26: 'Aile hekimliği', q27: 'Hayır', q28: 'Kitap', q29: 'Sezaryan', q30: 'Hayır', q31: 'Kısmen', q32: 'Kız', q33: 'Evet', q34: '2017-05-05', q35: '3', q36: '4'
    , q37: 'Hayır', q38: 'Hayır', q39: 'Diğer', q40: 'Hayır', q41: 'Hayır'
  };

  survey2_part1 = {
    q1: 'Biraz Memnun', q2: 'Biraz Memnun', q3: 'Biraz Memnun', q4: 'Biraz Memnun', q5: 'Biraz Memnun', q6: 'Biraz Memnun', q7: 'Biraz Memnun', q8: 'Biraz Memnun', q9: 'Biraz Memnun', q10: 'Biraz Memnun', q11: 'Biraz Memnun', q12: 'Biraz Memnun', q13: 'Biraz Memnun', q14: 'Biraz Memnun', q15a: 'Biraz Memnun', q15b: 'Biraz Memnun', q15c: 'Biraz Memnun', q16: 'Biraz Memnun', q17: 'Biraz Memnun', q18: 'Biraz Memnun'
    , q19: 'Biraz Memnun', q20: 'Biraz Memnun', q21: 'Biraz Memnun', q22: 'Biraz Memnun', q23: 'Biraz Memnun', q24: 'Biraz Memnun', q25: 'Biraz Memnun', q26: 'Biraz Memnun', q27: 'Biraz Memnun', q28: 'Biraz Memnun', q29: 'Biraz Memnun', q30: 'Biraz Memnun', q31: 'Biraz Memnun', q32: 'Biraz Memnun', q33: 'Biraz Memnun', q34a: 'Biraz Memnun', q34b: 'Biraz Memnun', q34c: 'Biraz Memnun'
    , q35a: 'Biraz Memnun', q35b: 'Biraz Memnun'
  };

  survey2_part2 = {
    q1: 'Biraz Önemli', q2: 'Biraz Önemli', q3: 'Biraz Önemli', q4: 'Biraz Önemli', q5: 'Biraz Önemli', q6: 'Biraz Önemli', q7: 'Biraz Önemli', q8: 'Biraz Önemli', q9: 'Biraz Önemli', q10: 'Biraz Önemli', q11: 'Biraz Önemli', q12: 'Biraz Önemli', q13: 'Biraz Önemli', q14: 'Biraz Önemli', q15a: 'Biraz Önemli', q15b: 'Biraz Önemli', q15c: 'Biraz Önemli', q16: 'Biraz Önemli', q17: 'Biraz Önemli', q18: 'Biraz Önemli'
    , q19: 'Biraz Önemli', q20: 'Biraz Önemli', q21: 'Biraz Önemli', q22: 'Biraz Önemli', q23: 'Biraz Önemli', q24: 'Biraz Önemli', q25: 'Biraz Önemli', q26: 'Biraz Önemli', q27: 'Biraz Önemli', q28: 'Biraz Önemli', q29: 'Biraz Önemli', q30: 'Biraz Önemli', q31: 'Biraz Önemli', q32: 'Biraz Önemli', q33: 'Biraz Önemli', q34a: 'Biraz Önemli', q34b: 'Biraz Önemli', q34c: 'Biraz Önemli'
    , q35a: 'Biraz Önemli', q35b: 'Biraz Önemli'
  };

  survey3 = {
    q1: 'Katılıyorum', q2: 'Katılıyorum', q3: 'Katılıyorum', q4: 'Katılıyorum', q5: 'Katılıyorum', q6: 'Katılıyorum', q7: 'Katılıyorum', q8: 'Katılıyorum', q9: 'Katılıyorum', q10: 'Katılıyorum', q11: 'Katılıyorum', q12: 'Katılıyorum', q13: 'Katılıyorum', q14: 'Katılıyorum', q15: 'Katılıyorum', q16: 'Katılıyorum', q17: 'Katılıyorum', q18: 'Katılıyorum'
    , q19: 'Katılıyorum', q20: 'Katılıyorum', q21: 'Katılıyorum', q22: 'Katılıyorum', q23: 'Katılıyorum', q24: 'Katılıyorum', q25: 'Katılıyorum', q26: 'Katılıyorum', q27: 'Katılıyorum', q28: 'Katılıyorum', q29: 'Katılıyorum', q30: 'Katılıyorum', q31: 'Katılıyorum', q32: 'Katılıyorum', q33: 'Katılıyorum', q34: 'Katılıyorum'
  }; 

  survey1Additional = { q5: 'Biraz Memnun', q6: 'Biraz Memnun', q11: 'Biraz Memnun', q12: 'Biraz Memnun', q20: 'Biraz Memnun', q21: 'Biraz Memnun', q22: 'Biraz Memnun', q27: 'Biraz Memnun', q37: 'Biraz Memnun', q38: 'Biraz Memnun', q40: 'Biraz Memnun', q41: '' };
  */
 
  constructor(public navCtrl: NavController, 
    public storage: Storage, 
    public navParams: NavParams, 
    public appService: AppServiceProvider, 
    public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController,
    public menuCtrl: MenuController) {
    debugger;

    this.surveyTypeID = navParams.get('surveyType');
    let comeTo = navParams.get('comeTo');

    this.menuCtrl.swipeEnable(false);
    
    if (this.surveyTypeID == 1) {
      this.showSurvey = { first: true, second: false, third: false, fourth: false };
    }
    else if (this.surveyTypeID == 2) {
      this.showSurvey = { first: false, second: true, third: false, fourth: false };
    }
    else if (this.surveyTypeID == 3) {
      this.showSurvey = { first: false, second: false, third: true, fourth: false };
    }
    else if (this.surveyTypeID == 4) {
      this.showSurvey = { first: false, second: false, third: false, fourth: true };
    }
    else {

    }

  }


  saveSurvey() {

    //this.surveyTypeID = "1"; //şimdilik sabit sonrasında kalkaacak
    let errCount = 0;
    let surveyData = this.getSelectedSurveyData(this.surveyTypeID);
    let memberId = localStorage.getItem('memberID');

    let isAnswersReady = this.checkAnswers(surveyData, this.surveyTypeID);
    

    if (isAnswersReady) {
      this.showLoadingIcon();
      this.appService.saveSurvey(this.surveyTypeID, memberId).subscribe(result => {

        console.log('Survey Header: ', result);
        let headerID = result.Result;

        let questionKey = Object.keys(surveyData);
        let numberOfQuestion = questionKey.length;
        let count = 0;

        var questionText = [];
          if(this.surveyTypeID == "1") {
             questionText = this.survey1Questions;
          }
          else if (this.surveyTypeID == "2") {
             questionText = this.survey2Questions;
          }
          else if (this.surveyTypeID == "3") {
             questionText = this.survey3Questions;
          }
          else if (this.surveyTypeID == "4") {
             questionText = this.survey4Questions;
          }
          else {}

        for (var i = 0; i < numberOfQuestion; i++) {
          let answer:string = surveyData[questionKey[i]].toString();
          
          if(this.surveyTypeID == "1" && (i == 4 || i == 5 || i == 10 || i == 11 || i==19 || i==20 || i==21 || i == 26 || i == 36 || i == 37 || i == 39 || i == 40 )){
            let addtionalAswerKey = "q"+(i+1);
            let addtionalAnswer = this.survey1Additional[addtionalAswerKey].toString();
            answer = surveyData[questionKey[i]].toString() + " " + addtionalAnswer;
          }

          let qText = questionText[i];
          answer = answer.trim();
          answer = answer.replace(/,/g , ", ");
          answer = answer.replace(/\/\//g , "**1**");
          answer = answer.replace(/\//g , "**2**");
          answer = answer.replace(/'/g , "**3**");
          answer = answer.replace(/&/g , "**4**");
          answer = answer.replace(/</g , "**5**");
          answer = answer.replace(/>/g , "**6**");

          this.appService.saveSurveyAnswers(headerID, qText, answer,i+1).subscribe(questionResult => {
            console.log(questionResult);
            count++;
            if (count == numberOfQuestion) {
              console.log("Anket Başarılı bir şekilde kayıt edildi");
              this.loading.dismiss();
              this.showMessage("Anketiniz başarılı bir şekilde kayıt edildi.");
              setTimeout(() => {
                this.doLoginSteps();
              }, 3000);
              
            }
          }, err => {
            console.log("Error Meydana geldi!");
            errCount++;
            if(errCount == 1){
              this.showMessage('Beklenmedik bir hata meydanaa geldi lütfen tekrar deneyiniz!');
              this.loading.dismiss();
            }
            
          });
        }

      },err => {
        this.loading.dismiss();
      });
    }
    else {
      this.showMessage("Lütfen tüm soruları doğru bir şekilde cevaplayınız!");
      console.log("Lütfen tüm soruları doğru bir şekilde cevaplayınız!");
    }

  }

  doLoginSteps() {
    debugger;
    if(this.surveyTypeID == "1") {
      this.navCtrl.setRoot(SurveyPage, { surveyType: 2 });
    }
    else if(this.surveyTypeID == "2") {
      
      this.storage.get('member').then(member => {
        if(member.CanAccessContents == true){
          this.storage.set('isUserLogged', 'true');
          this.navCtrl.setRoot(MyApp);
        }
        else {
          //içeriklere erişim hakkı yok o yüzden mesaj sayfasına yönlendir.
          this.navCtrl.push(InformationPage, {infoParam: "1-2"});
        }
      });
      
    }
    else if(this.surveyTypeID == "3") {
      this.navCtrl.setRoot(SurveyPage, { surveyType: 4 });
    }
    else if(this.surveyTypeID == "4") {
      /* this.storage.get('member').then(member => {
        if(member.CanAccessContents == true){
          this.storage.set('isUserLogged', 'true');
          this.navCtrl.setRoot(MyApp);
        }
        else {
          //içeriklere erişim hakkı yok o yüzden mesaj sayfasına yönlendir.
          this.navCtrl.push(InformationPage);
        }
      }); */
      let memberId = localStorage.getItem('memberID');
      this.appService.blockMember(memberId).subscribe(blockResult => {
        console.log("Block Result: ",blockResult);
        if(blockResult.Result != -1) {
          this.storage.set('member',blockResult.Result);
          this.navCtrl.push(InformationPage, {infoParam: "3-4"});
        }
      });
    }
  }

  getSelectedSurveyData(surveyID) {
    if (surveyID == "1") {
      return this.survey1;
    }
    else if (surveyID == "2") {
      return this.survey2;
    }
    else if (surveyID == "3") {
      return this.survey3;
    }
    else if (surveyID == "4") {
      return this.survey4;
    }
    else { return [] }
  }

  checkAnswers(surveyData, surveyID) {
    console.log(surveyData);
    let question = Object.keys(surveyData);

    for (var i = 0; i < question.length; i++) {
      let answer = surveyData[question[i]].toString();
      if (surveyID == "1" && i == 10 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 4 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 5 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 10 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 19 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 20 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 21 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 26 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 36 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 37 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 39 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      else if (surveyID == "1" && i == 40 && answer == "Evet" && this.survey1Additional[question[i]] == "") {
        console.log("Varsa doldurunuz olanı boş geçti!");
        return false;
      }
      

      if (answer == "") {
        console.log("hatalı girdi var");
        return false;
      }
    }

    return true;
  }

  showLoadingIcon() {
    this.loading = this.loadingCtrl.create({
      content: 'Bekleyiniz...'
    });

    this.loading.present();
  }

  showMessage(msg) {
    
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  
}
}
