import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-reg',
  templateUrl: './event-reg.component.html',
  styleUrls: ['./event-reg.component.css']
})
export class EventRegComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function() {
      // Input radio-group visual controls
      $('.radio-group label').on('click', function(){
          $(this).removeClass('not-active').siblings().addClass('not-active');
      });
  });
  $('.submit').click(function(){
    $('.text').animate({
      height: "toggle"
    }, 100);;
    $('.add').show();
  });

  }
call(){
 
}
}
