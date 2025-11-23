import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-discovery',
  imports: [NgOptimizedImage, LucideAngularModule, TranslatePipe],
  templateUrl: './discovery.html'
})
export class Discovery {
  readonly ArrowRight = ArrowRight;
}
