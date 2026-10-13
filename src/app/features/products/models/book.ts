import { signal } from '@angular/core';
import { BaseRes } from '../../../shared/models/base';

export interface BookDetailsRes {
  publicId: string;
  title: string;
  synopsis: string;
  author: AuthorRes;
  publisher: PublisherRes;
  genres: GenreRes[];
  isbn: string;
  createdAt: Date;
}

// Book Relations
export interface AuthorRes {
  publicId: string;
  firstName: string;
  lastName: string;
}
export interface PublisherRes extends BaseRes {}
export interface GenreRes extends BaseRes {}

// UI
export const BookModel = signal({
  title: '',
  synopsis: '',
  author: '',
  publisher: '',
  genres: '',
  isbn: '',
});
