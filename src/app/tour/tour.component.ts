import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;
declare var HeaderVideo:any;
@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      HeaderVideo.init({
      container: $('.header-video'),
      header: $('.header-video--media'),
      videoTrigger: $("#video-trigger"),
      autoPlayVideo: false
      });    
    });
  }

}
