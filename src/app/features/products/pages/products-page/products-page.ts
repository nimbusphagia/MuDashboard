import { Component } from '@angular/core';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  imports: [ProductDetail],
  selector: 'app-products-page',
  styleUrl: './products-page.css',
  templateUrl: './products-page.html',
})
export class ProductsPage {}
