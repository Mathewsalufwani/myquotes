import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes('Do I not destroy my enemies when I make them my friends?', 'Abraham Lincoln', 'Mathews Alufwani', 0, 0, new Date(2020,11,11)),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}