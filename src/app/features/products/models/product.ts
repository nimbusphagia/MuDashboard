import { MediaRes } from '../../../shared/models/media';
import { BookDetailsRes } from './book';

export interface ProductBase {
  name: string;
  description: string;
  price: number;
  sku: string;
  availability: Availability;
  createdAt: Date;
}
export interface ProductRes {
  publicId: string;
  name: string;
  description: string;
  price: number;
  media: MediaRes[];
  details: BookDetailsRes;
  sku: string;
  type: ProductType;
  availability: Availability;
  createdAt: Date;
  totalStock: number;
  availableStock: number;
}

export type ProductType = 'BOOK' | 'MERCH';
export type Availability = 'LOW' | 'IN_STOCK';
