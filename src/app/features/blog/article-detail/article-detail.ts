import { Component, inject, input, numberAttribute, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../../core/services/article.service';
import { LucideAngularModule, ArrowLeft } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-article-detail',
  imports: [NgOptimizedImage, RouterLink, LucideAngularModule, TranslatePipe],
  templateUrl: './article-detail.html'
})
export class ArticleDetail {
  private articleService = inject(ArticleService);

  // Input from router parameter
  id = input.required({ transform: numberAttribute });

  readonly ArrowLeft = ArrowLeft;

  // Computed article based on ID
  article = computed(() => this.articleService.getArticleById(this.id()));
}
