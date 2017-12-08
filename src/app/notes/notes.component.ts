import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

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
