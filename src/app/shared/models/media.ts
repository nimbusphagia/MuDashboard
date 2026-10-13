export interface MediaRes {
  publicId: string;
  url: string;
  provider: string;
  type: 'IMAGE' | 'VIDEO';
  altText: string;
  position: number;
  createdAt: Date;
}
