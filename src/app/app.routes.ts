import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { ProductsPage } from './features/products/pages/products-page/products-page';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      { path: '', redirectTo: '', pathMatch: 'full' },
      { path: 'products', component: ProductsPage },
    ],
  },
];
