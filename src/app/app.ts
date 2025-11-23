import { Component, afterNextRender, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Lenis from 'lenis';
import { RouterOutlet } from '@angular/router';
import { CustomCursor } from './layout/custom-cursor/custom-cursor';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { FooterSkeleton } from './shared/footer-skeleton/footer-skeleton';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CustomCursor, FooterSkeleton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'demo-app';
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');

    afterNextRender(() => {
      const lenis = new Lenis({
        autoRaf: true,
        wheelMultiplier: 1.5,
      });
    });
  }
}
