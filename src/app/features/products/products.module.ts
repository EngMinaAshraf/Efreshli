import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductDetails
  ],
  exports: [
    ProductDetails
  ]
})
export class ProductsModule { }