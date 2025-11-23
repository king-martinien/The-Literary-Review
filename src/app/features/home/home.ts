import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { ArticleGrid } from './article-grid/article-grid';
import { Quotes } from './quotes/quotes';
import { ArticleSkeleton } from '../../shared/article-skeleton/article-skeleton';
import { Discovery } from './discovery/discovery';

@Component({
  selector: 'app-home',
  imports: [Hero, ArticleGrid, Quotes, ArticleSkeleton, Discovery],
  templateUrl: './home.html'
})
export class Home { }
