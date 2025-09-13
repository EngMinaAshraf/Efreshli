// // // src/app/core/state/product.actions.ts
// // import { createAction, props } from '@ngrx/store';
// // import { Product } from '../models/product.model';
// // import { ProductState } from './product.state';

// // export const loadProducts = createAction('[Product API] Load Products');
// // export const loadProductsSuccess = createAction(
// //   '[Product API] Load Products Success',
// //   props<{ products: Product[] }>()
// // );
// // export const loadProductsFailure = createAction(
// //   '[Product API] Load Products Failure',
// //   props<{ error: string }>()
// // );

// // export const updateFilters = createAction(
// //   '[Product List] Update Filters',
// //   props<{ filters: Partial<ProductState['filters']> }>()
// // );
// // export const applyFilters = createAction('[Product List] Apply Filters');


// // src/app/core/state/product.actions.ts
// import { createAction, props } from '@ngrx/store';
// import { Product } from '../models/product.model';

// export const loadProducts = createAction('[Product API] Load Products');
// export const loadProductsSuccess = createAction(
//   '[Product API] Load Products Success',
//   props<{ products: Product[] }>()
// );
// export const loadProductsFailure = createAction(
//   '[Product API] Load Products Failure',
//   props<{ error: string }>()
// );

// export const updateFilters = createAction(
//   '[Product List] Update Filters',
//   props<{ filters: any }>() // Use a more specific type if available
// );
// export const applyFilters = createAction('[Product List] Apply Filters');