import { Component, viewChild, ElementRef, afterNextRender, inject } from '@angular/core';
import { NgOptimizedImage, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { InterviewService, Interview } from '../../core/services/interview.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-interviews',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink, DatePipe, LucideAngularModule, TranslatePipe],
    templateUrl: './interviews.html'
})
export class Interviews {
    private interviewService = inject(InterviewService);
    readonly ArrowRight = ArrowRight;

    featuredInterview: Interview | undefined;
    interviews: Interview[] = [];

    heroSection = viewChild<ElementRef>('heroSection');
    featuredSection = viewChild<ElementRef>('featuredSection');
    gridSection = viewChild<ElementRef>('gridSection');

    constructor() {
        this.featuredInterview = this.interviewService.getFeaturedInterview();
        this.interviews = this.interviewService.getInterviews().filter(i => !i.featured);

        gsap.registerPlugin(ScrollTrigger);

        afterNextRender(() => {
            this.initAnimations();
        });
    }



    private initAnimations() {
        const hero = this.heroSection()?.nativeElement;
        const featured = this.featuredSection()?.nativeElement;
        const grid = this.gridSection()?.nativeElement;

        if (hero) {
            gsap.fromTo(hero.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out'
                }
            );
        }

        if (featured) {
            gsap.fromTo(featured,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: featured,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out'
                }
            );
        }

        if (grid) {
            gsap.fromTo(grid.children,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: grid,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out'
                }
            );
        }
    }
}
