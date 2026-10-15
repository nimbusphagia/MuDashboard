import { Component } from '@angular/core';
import { TabbedLinks } from '../../../../shared/components/tabbed-links/tabbed-links';

@Component({
  imports: [TabbedLinks],
  selector: 'app-products-page',
  styleUrl: './products-page.css',
  templateUrl: './products-page.html',
})
export class ProductsPage {
  readonly routes = [
    { name: 'Books', route: 'books' },
    { name: 'Workshops', route: 'workshops' },
    { name: 'Merch', route: 'merch' },
  ];
}
