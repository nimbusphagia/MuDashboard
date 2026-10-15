import { Component, input } from '@angular/core';
import { LucideSearch } from '@lucide/angular';

@Component({
  imports: [LucideSearch],
  selector: 'app-searchbar',
  styleUrl: './searchbar.css',
  templateUrl: './searchbar.html',
})
export class Searchbar {
  placeholder = input<string>('');
}
