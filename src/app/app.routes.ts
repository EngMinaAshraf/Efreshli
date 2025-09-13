import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/products/components/product-list/product-list';
import { CategoryComponent } from './shared/components/category/category.component'; // Adjust path if needed
import { CheckoutComponent } from './features/checkout/components/payment-methods/payment-methods';
import { WishlistComponent } from './features/wishlist/wishlist.component';
import { ContactUsComponent } from './features/contact-us/contact-us/contact-us';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: 'checkout', component: CheckoutComponent }, // Ensure this matches the navigation
  { path: 'products', component: ProductListComponent },
  { path: 'wishlist', component: WishlistComponent },
  {path: 'contact-us', component: ContactUsComponent},
  { path: '**', redirectTo: '' }
  //   { path: 'products', component: ProductListComponent },
  // { path: '', redirectTo: '/products', pathMatch: 'full' },
  // { path: '**', redirectTo: '/products' } // إعادة توجيه أي مسار غير معروف إلى products
];
// { path: '', redirectTo: 'products', pathMatch: 'full' },
// { path: 'products', component: ProductListComponent }