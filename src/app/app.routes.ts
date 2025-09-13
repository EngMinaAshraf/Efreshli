import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CheckoutComponent } from './features/checkout/components/payment-methods/payment-methods';
import { ContactUsComponent } from './features/contact-us/contact-us/contact-us';
import { ProductListComponent } from './features/products/components/product-list/product-list';
import { WishlistComponent } from './features/wishlist/wishlist.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
// {
//   path: 'category/:category',
//   loadComponent: () =>
//     import('./shared/components/category/category.component').then(m => m.CategoryComponent),
//   data: { renderMode: 'client' } // 👈 force client rendering
// },

  { path: 'checkout', component: CheckoutComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'contact-us', component: ContactUsComponent },

  // Fallback
  { path: '**', redirectTo: '' }
];
