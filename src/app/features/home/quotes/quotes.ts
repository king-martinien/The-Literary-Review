import { Component, signal } from '@angular/core';
import { LucideAngularModule, Quote } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-quotes',
  imports: [LucideAngularModule, TranslatePipe],
  templateUrl: './quotes.html'
})
export class Quotes {
  readonly QuoteIcon = Quote;

  quotes = [
    { text: 'QUOTES.Q1.TEXT', author: 'QUOTES.Q1.AUTHOR' },
    { text: 'QUOTES.Q2.TEXT', author: 'QUOTES.Q2.AUTHOR' },
    { text: 'QUOTES.Q3.TEXT', author: 'QUOTES.Q3.AUTHOR' },
    { text: 'QUOTES.Q4.TEXT', author: 'QUOTES.Q4.AUTHOR' }
  ];

  currentQuote = signal(this.quotes[0]);

  constructor() {
    // Randomly select a quote on initialization
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote.set(this.quotes[randomIndex]);
  }
}
