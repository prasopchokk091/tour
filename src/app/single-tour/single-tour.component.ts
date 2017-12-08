import { Component, OnInit } from '@angular/core';

declare var $:any;
declare var datepicker:any;
declare var timepicker:any;
@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.css']
})
export class SingleTourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('input.date-pick').datepicker('setDate', 'today');
		$('input.time-pick').timepicker({
			minuteStep: 15,
			showInpunts: false
		})
  }

}
