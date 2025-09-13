// // src/app/core/state/product.selectors.ts
// import { createFeatureSelector, createSelector } from '@ngrx/store';
// import { ProductState } from './product.state'; // Import the state interface

// // 1. Create a typed feature selector
// export const selectProductState = createFeatureSelector<ProductState>('product');

// // 2. Create typed selectors
// export const selectAllProducts = createSelector(
//   selectProductState,
//   (state: ProductState) => state.products // Explicitly type the state parameter
// );

// export const selectFilteredProducts = createSelector(
//   selectProductState,
//   (state: ProductState) => state.filteredProducts
// );

// export const selectIsLoading = createSelector(
//   selectProductState,
//   (state: ProductState) => state.isLoading
// );

// export const selectFilters = createSelector(
//   selectProductState,
//   (state: ProductState) => state.filters // Fixed: Added type annotation
// );