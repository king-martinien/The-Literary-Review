import { Component, signal, viewChild, ElementRef, inject } from '@angular/core';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import gsap from 'gsap';
import { LucideAngularModule, Menu, X, Sun, Moon, ChevronDown } from 'lucide-angular';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './header.html',
})
export class Header {
  readonly Menu = Menu;
  readonly X = X;
  readonly Sun = Sun;
  readonly Moon = Moon;
  readonly ChevronDown = ChevronDown;
  isMenuOpen = signal(false);
  isLangMenuOpen = signal(false);
  currentLang = signal<'en' | 'fr'>('en');

  translate = inject(TranslateService);
  themeService = inject(ThemeService);
  menuOverlay = viewChild<ElementRef>('menuOverlay');
  menuLinks = viewChild<ElementRef>('menuLinks');

  toggleMenu() {
    this.isMenuOpen.update(val => !val);

    const overlay = this.menuOverlay()?.nativeElement;
    const links = overlay?.querySelectorAll('a');

    if (this.isMenuOpen()) {
      // Open animation
      gsap.to(overlay, {
        duration: 0.5,
        clipPath: 'circle(150% at 100% 0%)',
        ease: 'power3.inOut'
      });

      if (links) {
        gsap.fromTo(links,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            delay: 0.2,
            ease: 'power3.out'
          }
        );
      }
    } else {
      // Close animation
      gsap.to(overlay, {
        duration: 0.5,
        clipPath: 'circle(0% at 100% 0%)',
        ease: 'power3.inOut'
      });
    }
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleLangMenu() {
    this.isLangMenuOpen.update(val => !val);
  }

  changeLanguage(lang: 'en' | 'fr') {
    this.currentLang.set(lang);
    this.translate.use(lang);
    this.isLangMenuOpen.set(false);
  }
}
