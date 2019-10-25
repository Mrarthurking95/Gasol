import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saldodis',
  templateUrl: './saldodis.component.html',
  styleUrls: ['./saldodis.component.css']
})
export class SaldodisComponent implements OnInit {
  saldo:number;
  constructor() {
    this.saldo=1500;
   }

  ngOnInit() {
  }

}