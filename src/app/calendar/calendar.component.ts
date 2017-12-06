import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  Head_line : string;
  News:string;
  Date:string;
  addobj:any;
Add:any[];
  news: any = [
    {
      id: 1,
      headline: 'HEADLINE',
      news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.',
      date: '24 jan',
      img: '../assets/images/abc.jpg'
    },
    {
      id: 2,
      headline: 'HEADLINE',
      news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,\ sed do eiusmod tempor\r\n'  +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.',
      date: '24 jan',
      img : '../assets/images/dance.jpg'
    },
    {
      id: 3,
      headline: 'HEADLINE',
      news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.\\n\\n' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.',
      date: '24 jan',
      img : '../assets/images/EE5G3eV.jpg'
    },
    {
      id: 4,
      headline: 'HEADLINE',
      news: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.\\n\\n' +
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo.',
      date: '24 jan',
      img : '../assets/images/dance.jpg'
    }
  ];
 
  constructor() {
    this.Head_line="";
    this.Date="";
    this.News="";
    this.Add=[];
   }

  ngOnInit() {
   
}
add(headline,news,date){
this.Head_line=headline;
this.News=news;
this.Date=date;
this.addobj= {Head_line:this.Head_line,News:this.News,Date:this.Date};
this.Add.push(this.addobj);
console.log(this.Head_line);
this.Head_line="";
this.Date="";
this.News="";
}

}
