import { Component, AfterViewInit, viewChildren, ElementRef, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';
import { ArticleService } from '../../../core/services/article.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-article-grid',
  imports: [CommonModule, NgOptimizedImage, LucideAngularModule, RouterLink, TranslatePipe],
  templateUrl: './article-grid.html'
})
export class ArticleGrid implements AfterViewInit {
  private articleService = inject(ArticleService);
  readonly ArrowRight = ArrowRight;
  articleCards = viewChildren<ElementRef>('articleCard');

  articles = this.articleService.getArticles();

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    // Get the native elements from the signal
    const cards = this.articleCards().map(card => card.nativeElement);

    if (cards.length > 0) {
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.el.nativeElement,
          start: 'top 80%'
        }
      });
    }
  }
}
