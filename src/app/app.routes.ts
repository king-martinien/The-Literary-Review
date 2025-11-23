import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ArticleDetail } from './features/blog/article-detail/article-detail';
import { Privacy } from './features/legal/privacy/privacy';
import { Terms } from './features/legal/terms/terms';
import { Contact } from './features/contact/contact';
import { NotFound } from './features/misc/not-found/not-found';

import { About } from './features/about/about';

import { Interviews } from './features/interviews/interviews';
import { InterviewDetail } from './features/interviews/interview-detail/interview-detail';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'article/:id', component: ArticleDetail },
    { path: 'privacy', component: Privacy },
    { path: 'terms', component: Terms },
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: 'interviews', component: Interviews },
    { path: 'interviews/:id', component: InterviewDetail },
    { path: '**', component: NotFound }
];
