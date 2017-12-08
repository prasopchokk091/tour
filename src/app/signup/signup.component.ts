import { Component, OnInit } from '@angular/core';
import '../../assets/js/bootstrap-datepicker.js';
declare var $:any;
declare var datepicker:any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $('input.date-pick').datepicker({
      format: 'dd/mm/yyyy',
      startDate: '-80y'

    });
    $('input.date-pick').datepicker('setDate', '01-01-1999');
   // $('input.date-pick').datepicker('update', new Date(2011, 2, 5));
    
  }

}
