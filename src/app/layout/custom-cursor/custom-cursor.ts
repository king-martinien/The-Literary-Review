import { Component, AfterViewInit, viewChild, ElementRef, HostListener, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-custom-cursor',
  imports: [],
  templateUrl: './custom-cursor.html'
})
export class CustomCursor implements AfterViewInit {
  cursor = viewChild<ElementRef>('cursor');
  follower = viewChild<ElementRef>('follower');
  private platformId = inject(PLATFORM_ID);
  private isMobile = false;

  ngAfterViewInit() {
    // Check if we're in a browser and if it's a mobile device
    if (!isPlatformBrowser(this.platformId)) return;

    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;

    const cursorEl = this.cursor()?.nativeElement;
    const followerEl = this.follower()?.nativeElement;

    if (!cursorEl || !followerEl) return;

    // Hide cursor on mobile
    if (this.isMobile) {
      cursorEl.style.display = 'none';
      followerEl.style.display = 'none';
      return;
    }

    document.addEventListener('mousemove', (e) => {
      gsap.to(cursorEl, { duration: 0.1, x: e.clientX, y: e.clientY });
      gsap.to(followerEl, { duration: 0.3, x: e.clientX, y: e.clientY });

      // Smart color inversion based on section background
      const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
      if (elementUnderCursor) {
        const bgColor = this.getEffectiveBackgroundColor(elementUnderCursor);
        const isDark = this.isColorDark(bgColor);

        if (isDark) {
          cursorEl.style.borderColor = 'white';
          followerEl.style.borderColor = 'rgba(255, 255, 255, 0.5)';
        } else {
          cursorEl.style.borderColor = 'black';
          followerEl.style.borderColor = 'rgba(0, 0, 0, 0.5)';
        }
      }
    });

    // Add hover effect for interactive elements
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => gsap.to(followerEl, { scale: 1.5, duration: 0.3 }));
      el.addEventListener('mouseleave', () => gsap.to(followerEl, { scale: 1, duration: 0.3 }));
    });
  }

  private getEffectiveBackgroundColor(element: Element): string {
    let currentElement: Element | null = element;

    // Traverse up the DOM tree to find a non-transparent background
    while (currentElement && currentElement !== document.body) {
      const style = window.getComputedStyle(currentElement);
      const bgColor = style.backgroundColor;

      // Check if background is not transparent
      if (bgColor && bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
        return bgColor;
      }

      currentElement = currentElement.parentElement;
    }

    // Default to white if no background found
    return 'rgb(255, 255, 255)';
  }

  private isColorDark(color: string): boolean {
    // Parse RGB values from color string
    const rgb = color.match(/\d+/g);
    if (!rgb || rgb.length < 3) return false;

    const [r, g, b] = rgb.map(Number);
    // Calculate relative luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  }
}
