import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // Changing the navbar style on scroll only if we are in desktop mode
    if (screen.width > 800) {
      $(window).scroll(function() {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50)
        $('.cov-img').toggleClass('scrolled1', $(this).scrollTop() > 50)
        $('.navbar').toggleClass('downsized', $(this).scrollTop() > 50)
      })
    }
  }
  title = 'teamgle-heb';
}
