import { Component, input } from '@angular/core';
import { RoundButton } from '../../../../components/round-button/round-button';
import { Searchbar } from '../../../../components/searchbar/searchbar';

@Component({
  imports: [RoundButton, Searchbar],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  placeholder = input<string>('');
}
