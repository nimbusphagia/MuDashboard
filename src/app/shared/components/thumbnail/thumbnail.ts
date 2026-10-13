import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-thumbnail',
  styleUrl: './thumbnail.css',
  templateUrl: './thumbnail.html',
})
export class Thumbnail {
  src = input.required<string>();
  height = input<string>('50px');
  alt = input<string>('');
}
