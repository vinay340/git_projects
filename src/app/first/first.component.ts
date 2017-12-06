import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {  Validators  }from '@angular/forms';
import {  NgForm}from '@angular/forms';
import {  FormsModule }from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import{ HttpModule } from '@angular/http';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})

export class FirstComponent implements OnInit {
  
  @ViewChild('f') f: NgForm;
 
  constructor( private route: ActivatedRoute, 
    private router: Router) { 
 
}

  ngOnInit() {

    $(document).ready(function(){
      $('#dropdown1').click(function(){
        $('#dd').toggle();
      });
     
    });

   $('.sidebar-brand li a').click(function(){
     $('li a').toggleClass('active');
   })
  }



}
