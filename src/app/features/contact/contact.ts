import { Component, inject, ElementRef, viewChild, afterNextRender } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, Mail, Phone, MapPin } from 'lucide-angular';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import gsap from 'gsap';

interface ContactForm {
  name: FormControl<string>;
  phone: FormControl<string>;
  email: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  selector: 'app-contact',
  imports: [LucideAngularModule, NgOptimizedImage, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html'
})
export class Contact {
  contactForm = inject(NonNullableFormBuilder).group<ContactForm>({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2), Validators.maxLength(50)] }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10), Validators.maxLength(20)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10), Validators.maxLength(1000)] })
  });

  headerSection = viewChild<ElementRef>('headerSection');
  contactCard = viewChild<ElementRef>('contactCard');

  constructor() {
    afterNextRender(() => {
      const header = this.headerSection()?.nativeElement;
      const card = this.contactCard()?.nativeElement;
      const formFields = document.querySelectorAll('.form-field');

      if (!header || !card) return;

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(header, {
        y: 0,
        opacity: 1,
        duration: 0.8
      })
        .to(card, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.4')
        .to(formFields, {
          x: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5
        }, '-=0.4');
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.getRawValue());
      this.contactForm.reset();
    }
  }

  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
}
