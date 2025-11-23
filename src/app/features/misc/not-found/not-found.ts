import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink, NgOptimizedImage, TranslatePipe],
  templateUrl: './not-found.html'
})
export class NotFound { }
