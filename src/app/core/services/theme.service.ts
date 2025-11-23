import { Injectable, signal, effect } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    isDarkMode = signal<boolean>(false);

    constructor() {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        this.isDarkMode.set(savedTheme === 'dark' || (!savedTheme && prefersDark));

        // Apply theme on initialization
        effect(() => {
            this.applyTheme(this.isDarkMode());
        });
    }

    toggleTheme(): void {
        this.isDarkMode.update(val => !val);
    }

    private applyTheme(isDark: boolean): void {
        const html = document.documentElement;

        if (isDark) {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }
}
