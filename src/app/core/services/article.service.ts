import { Injectable, signal } from '@angular/core';

export interface Article {
    id: number;
    category: string;
    title: string;
    excerpt: string;
    image: string;
    content?: string; // For the detail view
}

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    // Mock data moved from ArticleGrid
    private articles = signal<Article[]>([
        {
            id: 1,
            category: 'Review',
            title: 'The Silence of the Archives',
            excerpt: 'A deep dive into the forgotten manuscripts of the 19th century.',
            image: '/images/article-1-archives.webp',
            content: 'This is the full content of "The Silence of the Archives". It explores the hidden depths of historical records...'
        },
        {
            id: 2,
            category: 'Essay',
            title: 'Digital Minimalism in Prose',
            excerpt: 'How the internet age is stripping away the ornate language of the past.',
            image: '/images/article-2-minimalism.webp',
            content: 'Full content for "Digital Minimalism in Prose". Analyzing the shift towards brevity in modern writing...'
        },
        {
            id: 3,
            category: 'Interview',
            title: 'Conversations with Ghosts',
            excerpt: 'An exclusive interview with the reclusive author of "The Void".',
            image: '/images/article-3-ghosts.webp',
            content: 'Full interview transcript with the author of "The Void"...'
        },
        {
            id: 4,
            category: 'Fiction',
            title: 'The Last Bookstore',
            excerpt: 'A short story about a world where paper books are illegal contraband.',
            image: '/images/article-4-bookstore.webp',
            content: 'Once upon a time, in a world where paper was forbidden...'
        },
        {
            id: 5,
            category: 'Review',
            title: 'Echoes of a Distant Time',
            excerpt: 'Revisiting the classics through a modern lens.',
            image: '/images/article-5-echoes.webp',
            content: 'Re-reading the classics reveals new meanings in our modern context...'
        },
        {
            id: 6,
            category: 'Essay',
            title: 'The Architecture of Words',
            excerpt: 'Building worlds with sentences: a structural analysis.',
            image: '/images/article-6-architecture.webp',
            content: 'Sentences are the bricks of the literary world. This essay explores their structure...'
        }
    ]);

    getArticles() {
        return this.articles.asReadonly();
    }

    getArticleById(id: number) {
        return this.articles().find(a => a.id === id);
    }
}
