import { Component, OnInit ,ViewChild} from '@angular/core';
// import * as $ from 'jquery';
var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


 
   constructor() {
    
    }
    
 
 
 
  ngOnInit() {
$(document).ready(function(){
  $('#btn_modal').click(function(){
    $('#mymodal').modal();
  })
})

  }
  }
  

