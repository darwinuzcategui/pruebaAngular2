import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent  {

  //agno = new Date().getFullYear();
  agno: number;
  constructor(){
  this.agno = new Date().getFullYear()+1;

  }


}
