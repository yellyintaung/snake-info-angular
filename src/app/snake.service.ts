import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnakeService {

  snakeList = [
    {
      id: 1,
      name:"မြွေပွေး(Daboia siamensis)",
      photo:"../assets/snake1.jpg",
      venom : "အဆိပ်ပြင်း",
      location : "South East Asia",
      desription : "အကွက်များပါရှိကာ အရောင်သည် မီးခိုးရောင် သို့မဟုတ် သံလွင်ရောင်ဖြစ်ပြီး ကြီးမားသောအစက်အပြောက်အတန်းများကြားတွင် အရောင်ပိုပေါ်လွင်သော အစက်အပြောက်လေးများပါရှိသည်။ venter သည် အနောက်ပိုင်းတွင် မီးခိုးရောင်ဖြင့် ရောယှက်ထားသည်။",
      related_photo : "../assets/s1.jpg",
      related_photo1 : "../assets/s2.jpg",
      related_photo2 : "../assets/s3.jpg",
    },
    {
      id: 2,
      name:"ငန်းတော်ကျား(Banded Krait)",
      photo:"../assets/snake2.jpg",
      venom : "အဆိပ်ပြင်း",
      location : "Asia",
      desription : "ငန်းတော်ကျားမြွေသည် အဆိပ်ပြင်းသော မြွေတစ်မျိုးဖြစ်ပြီး တောင်အာရှ နှင့် အရှေ့တောင်အာရှတွင် တွေ့ရလေ့ရှိသည်။ စုစုပေါင်း မျိုးစိတ် ၁၆ မျိုးမျှ တွေ့ရှိထားသည်။ ထိုမြွေတို့သည် များသောအားဖြင့် အနက်ရောင် နှင့် အဝါရောင် အား တရစ်စီရစ် ထားကြသည်",
      related_photo : "",
      related_photo1 : "",
      related_photo2 : "",
    },
    {
      id: 3,
      name:"မြွေစိမ်းမြီးခြောက်(Trimeresurus macrops)",
      photo:"../assets/snake3.jpg",
      venom : "အဆိပ်ပျော့",
      location : "Asia",
      desription : "မျိုးစု Trimeresurus ရှိ မျိုးစိတ်အများစုသည် သေးငယ်ပြီး ပါးလွှာသော ခန္ဓာကိုယ်နှင့် အမြီး ပါရှိပြီး ၎င်းမြွေအများစုမှာ မြေပြင်အထက် အပင်ပေါ်တွင် နေထိုင်ကျက်စားသည့် မျိုးစိတ်များဖြစ်သည်။ Trimeresurus မျိုးစိတ်အများစုသည် ပုံမှန်အားဖြင့် အစိမ်းရင့်ရောင်ရှိသော်လည်း အချို့မျိုးစိတ်များတွင် အဝါရောင်၊ အနက်ရောင်၊ လိမ္မော်ရောင်၊ အနီရောင် သို့မဟုတ် ရွှေရောင် အမှတ်အသားများရှိသည်။",
      related_photo : "../assets/g1.jpg",
      related_photo1 : "../assets/g2.jpg",
      related_photo2 : "../assets/g3.jpg",
    },
    {
      id: 4,
      name:"လင်းမျက်ပြူး(Ptyas korros)",
      photo:"../assets/snake4.jpg",
      venom : "အဆိပ်မရှိ",
      location : "Asia",
      desription : "လင်းမျက်ပြူး (သို့) တရုတ်လင်းမြွေ ဟု လူသိများသော Ptyas korros သည် အရှေ့တောင်အာရှ၏ ဒေသရင်း အဆိပ်မရှိသော မြွေ မျိုးစိတ်ဖြစ်သည် ။",
      related_photo : "",
      related_photo1 : "",
      related_photo2 : "",
    },
  ];
  constructor() { }
}
