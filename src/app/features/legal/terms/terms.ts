import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-terms',
  imports: [TranslatePipe],
  templateUrl: './terms.html'
})
export class Terms { }
