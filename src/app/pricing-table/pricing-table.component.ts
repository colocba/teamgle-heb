import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {

  constructor() { }

  recordTitles = ["זוג תשלום", "תקופת התחייבות", "משתמשים"];
  tableContent = [
    {
      price: 870,
      paymentPeriod: "חודשי",
      commitmentPeriod: "שנה אחת",
      users: 50
    },
    {
      price: 1300,
      paymentPeriod: "חודשי",
      commitmentPeriod: "שנה אחת",
      users: 100
    },
    {
      price: 1800,
      paymentPeriod: "חודשי",
      commitmentPeriod: "שנה אחת",
      users: "ללא הגבלה"
    }
  ];

  ngOnInit() {
  }

}
