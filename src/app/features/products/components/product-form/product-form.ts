import { Component, effect } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../../../../shared/components/form-field/form-field';
import { ImageField } from '../../../../shared/components/image-field/image-field';
import { input } from '@angular/core';
import { ProductBase } from '../../models/product';
import { MediaRes } from '../../../../shared/models/media';
import { ImageCarousel } from '../../../../shared/components/image-carousel/image-carousel';
import { MOCK_MEDIA } from '../../../../mock-data/media';

@Component({
  imports: [ReactiveFormsModule, FormField, ImageField, ImageCarousel],
  selector: 'app-product-form',
  styleUrl: './product-form.css',
  templateUrl: './product-form.html',
})
export class ProductForm {
  product = input.required<ProductBase>();
  media = input<MediaRes[]>(MOCK_MEDIA);
  isDisabled = input<boolean>(false);

  productForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    sku: new FormControl(),
    availability: new FormControl(),
    createdAt: new FormControl(),
  });
  constructor() {
    effect(() => {
      this.isDisabled() ? this.productForm.disable() : this.productForm.enable();
    });
    effect(() => {
      const productData = this.product();
      if (productData) {
        this.productForm.patchValue(productData);
      }
    });
  }
}
