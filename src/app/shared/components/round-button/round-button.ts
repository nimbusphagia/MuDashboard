import { Component, input } from '@angular/core';
import { LucidePlus } from '@lucide/angular';

@Component({
  imports: [LucidePlus],
  selector: 'app-round-button',
  styleUrls: ['./round-button.css', '../../../../styles.css'],
  templateUrl: './round-button.html',
})
export class RoundButton {
  size = input<string>('16px');
}
