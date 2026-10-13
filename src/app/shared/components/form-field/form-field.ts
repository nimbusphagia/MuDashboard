import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-form-field',
  styleUrl: './form-field.css',
  templateUrl: './form-field.html',
})
export class FormField {
  name = input.required<string>();
  type = input<'text' | 'date' | 'number' | 'password'>('text');
  tag = input<'input' | 'textarea'>('input');
  direction = input<'row' | 'col'>('col');
  rows = input<number>(4);
  disabled = input<boolean>(false);
}
