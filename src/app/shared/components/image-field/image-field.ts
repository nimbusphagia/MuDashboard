import { Component, input } from '@angular/core';
import { Thumbnail } from '../thumbnail/thumbnail';

@Component({
  imports: [Thumbnail],
  selector: 'app-image-field',
  styleUrl: './image-field.css',
  templateUrl: './image-field.html',
})
export class ImageField {
  name = input.required<string>();
  preview = input.required<string>();
  showTitle = input<boolean>(false);
  disabled = input<boolean>(false);
}
