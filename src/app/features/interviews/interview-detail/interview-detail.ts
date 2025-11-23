import { Component, inject, input, effect, viewChild, ElementRef } from '@angular/core';
import { NgOptimizedImage, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InterviewService, Interview } from '../../../core/services/interview.service';
import { LucideAngularModule, ArrowLeft } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
    selector: 'app-interview-detail',
    standalone: true,
    imports: [NgOptimizedImage, RouterLink, DatePipe, LucideAngularModule, TranslatePipe],
    templateUrl: './interview-detail.html'
})
export class InterviewDetail {
    private interviewService = inject(InterviewService);
    readonly ArrowLeft = ArrowLeft;

    // Using input signal for route parameter binding
    id = input.required<string>();

    interview: Interview | undefined;

    contentSection = viewChild<ElementRef>('contentSection');
    heroImage = viewChild<ElementRef>('heroImage');

    constructor() {
        gsap.registerPlugin(ScrollTrigger);

        effect(() => {
            const interviewId = Number(this.id());
            if (!isNaN(interviewId)) {
                this.interview = this.interviewService.getInterviewById(interviewId);

                // Reset scroll position
                window.scrollTo(0, 0);

                // Trigger animation after view update
                setTimeout(() => {
                    this.animateContent();
                    this.initParallax();
                }, 100);
            }
        });
    }

    private initParallax() {
        const image = this.heroImage()?.nativeElement;
        if (image) {
            gsap.to(image, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: image.parentElement,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    }

    private animateContent() {
        const content = this.contentSection()?.nativeElement;
        if (content) {
            gsap.fromTo(content.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: content,
                        start: 'top 80%'
                    }
                }
            );
        }
    }
}
