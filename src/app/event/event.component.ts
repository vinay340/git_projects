import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/index';
import{ HttpModule } from '@angular/http';
import { JsonApiDatastore } from 'angular2-jsonapi';
// import {Http} from '@angular/http';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
  providers:[EventService]
})
export class EventComponent implements OnInit {
arr:any=[
  {Event_id:1,Event_name:'singing competition',Event_img:'../assets/images/singing.jpg', Event_rules: [
    "sing rule #1 ","sing rule #2",
   
    'sing rule #3'
  ]},
  {Event_id:2,Event_name:'painting competition',Event_img:'../assets/images/paint.jpg', 
  Event_prize:"browseTab this is hidden contentNew York..................\n"+
  "the largest city in the U.S., is an architectural marvel with plenty of historic monu ments, magnificent buildings and countless dazzling skyscrapers.",
  Event_rules: [
    'painting rule #1',
    'painting rule #2',
    'painting rule #3'
  ]},{Event_id:3,Event_name:'dance competition',Event_img:'../assets/images/dance.jpg', Event_rules: [
    'dance rule #1',
    'dance rule #2',
    'dance rule #3'
  ]},
];

e_var:any;

  constructor(private e_items:EventService) {
   }

  ngOnInit() {      

$(window).ready(function() {
  $('.post-module').hover(function() {
    $(this).find('.description').stop().animate({
      height: "toggle",
      opacity: "toggle"
    }, 300);
  });
});
$(window).ready(function(){
  $('#more_btn').click(function(){
$('#event').toggle();
  })
})
$('.register').click(function(){
  $('.modal').stop;
})
$('.sidebar-nav li a').click(function(){
  $(this).addClass('active');
  });
  }
  
  call(){
    this.e_var=this.e_items.somemethod();
    console.log(this.e_var);
    alert('hello');
    }
  
}
