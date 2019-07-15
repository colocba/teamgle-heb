import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'qanda-accordion',
  templateUrl: './qanda-accordion.component.html',
  styleUrls: ['./qanda-accordion.component.css']
})
export class QandaAccordionComponent implements OnInit {

  qAndA = [{
    question: "?האם צריך להתקין תוכנה",
    answer: ".ממש לא. הכניסה למערכת דרך האינטרנט באמצעות שם משתמש וסיסמא. כל אחד לפי ההרשאה שלו: מנהלים, עובדים, לקוחות",
    hrefId: "collapseOne"
  }, {
    question: "?כמה זה עולה",
    answer: ".עלות השימוש במערכת נקבעת לפי היקף העובדים שלכם",
    hrefId: "collapseTwo"
  }, {
    question: "?איך משלמים",
    answer: ".באמצעות כרטיס אשראי, בחיוב חודשי",
    hrefId: "collapseThree"
  }, {
    question: "?יש תמיכה",
    answer: ".כן. צוות טימגל זמין במענה במייל, בוואטסאפ ובטלפון. נשמח לסייע",
    hrefId: "collapseFour"
  }, {
    question: "?איך מתחילים לעבוד",
    answer: "עם קבלת הרשאה למערכת, תבצעו התאמות ראשוניות – לפי התפקידים שיש לכם בארגון, הזנת פרטי עובדים, רשימת לקוחות, קביעת הרשאות. מכאן – אפשר לצאת לדרך. תנו לעובדים שלכם שם משתמש וסיסמא והזמינו אותם לקבל את כל המידע הנחוץ להם באמצעות המערכת – גם מהטלפון הנייד",
    hrefId: "collapseFive"
  }]

  constructor() { }

  ngOnInit() {
  }

}
