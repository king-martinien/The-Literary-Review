import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Twitter, Instagram, Facebook, Mail, Phone, MapPin, MessageSquare } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, RouterLink, TranslatePipe],
  templateUrl: './footer.html'
})
export class Footer {
  readonly Twitter = Twitter;
  readonly Instagram = Instagram;
  readonly Facebook = Facebook;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly MessageSquare = MessageSquare;
}
