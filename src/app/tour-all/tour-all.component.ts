import { Component, OnInit,AfterViewInit } from '@angular/core';
import '../../assets/js/icheck.js';
declare var $:any;
declare var iCheck:any;

@Component({
  selector: 'app-tour-all',
  templateUrl: './tour-all.component.html',
  styleUrls: [
    './tour-all.component.css'
  ]
})
export class TourAllComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
    $('input').iCheck({
			checkboxClass: 'icheckbox_square-grey',
			radioClass: 'iradio_square-grey'
		});
  }
  ngAfterViewInit() {

  }

}
