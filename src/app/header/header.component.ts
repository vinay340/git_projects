import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
   
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("active");
      
     
  });
  $(document).ready(function(){
 $('.btn_toggle').click(function(){
  //  $('#sidebar-wrapper').animate({
  //    width:'toggle'
  //  }, 300);
  $('#sidebar-wrapper').slideToggle()
   });
  });
 
  }

}
