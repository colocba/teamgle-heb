import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor() { }

  cards1 = [
    {url: "assets/cloud-syn-logo/cloud-syn-logo.png" ,
     title: "הכל במקום אחד. מערכת בענן, זמינה ועדכנית מכל מקום למנהלים ולעובדים."},
    {url: "assets/anounce-shifts-logo/anounce-shift-logo.png" ,
     title: "פרסמו את האירועים שלכם והמשמרות הפתוחות."},
    {url: "assets/choose-shifts-logo/choose-shifts-logo.png" ,
     title: "אפשרו לצוות לבחור משמרות. כל אחד לפי ההרשאה שלו."},
    {url: "assets/update-changes-logo/update-changes-logo.png" ,
     title: "עדכנו בשינויים של הרגע האחרון. הודעות מייל, הודעות טקסט והודעות פוש."}
  ]

  cards2 = [
    {url: "assets/monitor-scheddule-logo/monitor-scheddule-logo.png" ,
     title: "אפשרו לצוות לצפות בסידור עבודה ובתלוש שכר."},
    {url: "assets/logistics-mgmnt-logo/logistics-mgmnt-logo.png" ,
     title: "נהלו ציוד ולוגיסטיקה."},
    {url: "assets/data-payment-system-logo/data-payment-system-logo.png" ,
     title: "יצאו נתונים למערכת השכר."},
    {url: "assets/worker-history-logo/worker-history-logo.png" ,
     title: "שמירת היסטוריה וניסיון של עובדים."}
  ]

  ngOnInit() {
  }

}
