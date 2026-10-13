import { MediaRes } from '../shared/models/media';

export const MOCK_MEDIA: MediaRes[] = [
  {
    publicId: 'books/the-hobbit',
    url: 'https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg',
    provider: 'openlibrary',
    type: 'IMAGE',
    altText: 'Cover of The Hobbit by J.R.R. Tolkien',
    position: 1,
    createdAt: new Date('2025-01-10T09:00:00Z'),
  },
  {
    publicId: 'books/1984',
    url: 'https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg',
    provider: 'openlibrary',
    type: 'IMAGE',
    altText: 'Cover of 1984 by George Orwell',
    position: 2,
    createdAt: new Date('2025-01-11T10:30:00Z'),
  },
  {
    publicId: 'books/pride-and-prejudice',
    url: 'https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg',
    provider: 'openlibrary',
    type: 'IMAGE',
    altText: 'Cover of Pride and Prejudice by Jane Austen',
    position: 3,
    createdAt: new Date('2025-01-12T14:15:00Z'),
  },
  {
    publicId: 'books/the-great-gatsby',
    url: 'https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg',
    provider: 'openlibrary',
    type: 'IMAGE',
    altText: 'Cover of The Great Gatsby by F. Scott Fitzgerald',
    position: 4,
    createdAt: new Date('2025-01-13T08:45:00Z'),
  },
  {
    publicId: 'books/dune',
    url: 'https://covers.openlibrary.org/b/isbn/9780441013593-L.jpg',
    provider: 'openlibrary',
    type: 'IMAGE',
    altText: 'Cover of Dune by Frank Herbert',
    position: 5,
    createdAt: new Date('2025-01-14T16:20:00Z'),
  },
];
