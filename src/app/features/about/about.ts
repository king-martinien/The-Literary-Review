import { Component, viewChild, ElementRef, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { LucideAngularModule, Star } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
    selector: 'app-about',
    imports: [NgOptimizedImage, RouterLink, LucideAngularModule, TranslatePipe],
    templateUrl: './about.html'
})
export class About {
    readonly Star = Star;

    heroSection = viewChild<ElementRef>('heroSection');
    founderSection = viewChild<ElementRef>('founderSection');
    valuesSection = viewChild<ElementRef>('valuesSection');
    ctaSection = viewChild<ElementRef>('ctaSection');

    constructor() {
        gsap.registerPlugin(ScrollTrigger);

        afterNextRender(() => {
            this.initAnimations();
        });
    }

    private initAnimations() {
        const hero = this.heroSection()?.nativeElement;
        const founder = this.founderSection()?.nativeElement;
        const values = this.valuesSection()?.nativeElement;
        const cta = this.ctaSection()?.nativeElement;

        // Hero Animation
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

        // Founder Animation
        if (founder) {
            gsap.fromTo(founder,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: founder,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out'
                }
            );
        }

        // Values Animation
        if (values) {
            gsap.fromTo(values.children,
                { y: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: values,
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power3.out'
                }
            );
        }

        // CTA Animation
        if (cta) {
            gsap.fromTo(cta,
                { scale: 0.95, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: cta,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out'
                }
            );
        }
    }
}
