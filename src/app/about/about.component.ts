import { Component, OnInit ,ViewChild} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  newnote:string;
  notes:any[];
  noteobj:any;
  notetext:string='';
  notetext_file:string='';
 
   constructor() {
       this.newnote="";
   this.notes=[];
    }
    
 addNote(evt,evt1){
 this.newnote=evt;
  this.noteobj={newnote:this.newnote};
   this.notes.push(this.noteobj);
 this.notetext='';
 }
 
 
  ngOnInit() {}
  }
  

