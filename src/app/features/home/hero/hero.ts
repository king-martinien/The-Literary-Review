import { Component, AfterViewInit, viewChild, ElementRef } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, RouterLink, TranslatePipe],
  templateUrl: './hero.html'
})
export class Hero implements AfterViewInit {
  subtitle = viewChild<ElementRef>('subtitle');
  title = viewChild<ElementRef>('title');
  description = viewChild<ElementRef>('description');
  cta = viewChild<ElementRef>('cta');
  heroBg = viewChild<ElementRef>('heroBg');

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(this.subtitle()?.nativeElement, {
      y: 20,
      opacity: 0,
      duration: 1,
      delay: 0.2
    })
      .from(this.title()?.nativeElement, {
        y: 20,
        opacity: 0,
        duration: 1.2
      }, '-=0.8')
      .from(this.description()?.nativeElement, {
        y: 20,
        opacity: 0,
        duration: 1
      }, '-=0.8');

    const ctaEl = this.cta()?.nativeElement;
    if (ctaEl) {
      tl.fromTo(ctaEl,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.9'
      );
    }

    // Parallax Effect
    const bg = this.heroBg()?.nativeElement;
    if (bg) {
      gsap.to(bg, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: bg.parentElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }
}
