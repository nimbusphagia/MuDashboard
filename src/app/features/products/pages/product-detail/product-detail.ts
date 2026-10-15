import { Component, input } from '@angular/core';
import { ProductForm } from '../../components/product-form/product-form';
import { ProductBase } from '../../models/product';

@Component({
  imports: [ProductForm],
  selector: 'app-product-detail',
  styleUrls: ['./product-detail.css', '../../../../../styles.css'],
  templateUrl: './product-detail.html',
})
export class ProductDetail {
  product = input<ProductBase>({
    name: 'La Historia del Rey Transparente',
    description: 'Novela BestSeller de la escritora espanola Rosa Montero',
    price: 55.5,
    sku: 'BO-001',
    availability: 'IN_STOCK',
    createdAt: new Date('2026-10-13'),
  });
}
