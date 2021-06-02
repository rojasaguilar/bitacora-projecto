import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'bitacora-proyecto';

  constructor(private _router: Router) {}
  ngOnInit() {
    $('.links').mouseover(function () {
      $('.links').css('cursor', 'pointer');
    });
  }
}
