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
 
   $('.btn_toggle').click(function(e){
     e.preventDefault();
      // $('#sidebar-wrapper').hide();
    //  $('#menu-toggle').show('fast');
     
      // $("#wrapper").toggleClass("active");
     
   })
  }

}
