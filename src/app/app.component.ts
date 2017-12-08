import { Component,OnInit } from '@angular/core';
declare var jquery:any;
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ngOnInit(){
    // $(".search-overlay-menu-btn").on("click", function (a) {
    //   $('body').addClass('has-fullscreen-modal')
    //   $(".search-overlay-menu").addClass("open"), $('.search-overlay-menu > form > input[type="search"]').focus()}), 
    //   $(".search-overlay-close").on("click", function (a) {
    //   $(".search-overlay-menu").removeClass("open")
    //   $('body').removeClass('has-fullscreen-modal')
    //   }),
    //   $(".search-overlay-menu, .search-overlay-menu .search-overlay-close").on("click keyup", function (a) {
    //     (a.target == this || "search-overlay-close" == a.target.className || 27 == a.keyCode) && $(this).removeClass("open")
    //   });
  }

  // ready()
  // {
  //   $(document).ready(function() {
      
  //     HeaderVideo.init({
  //     container: $('.header-video'),
  //     header: $('.header-video--media'),
  //     videoTrigger: $("#video-trigger"),
  //     autoPlayVideo: false
  //     });    
      
  //     });
  // }
  constructor() { }
}
