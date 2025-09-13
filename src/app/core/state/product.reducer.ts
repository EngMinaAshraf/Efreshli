// // src/app/core/state/product.reducer.ts
// import { createReducer, on } from '@ngrx/store';
// import { ProductState, initialProductState } from './product.state';
// import { loadProducts, loadProductsSuccess, loadProductsFailure, updateFilters, applyFilters } from './product.actions';

// export const productReducer = createReducer(
//   initialProductState,
  
//   on(loadProducts, (state) => ({
//     ...state,
//     isLoading: true,
//     error: null
//   })),
  
//   on(loadProductsSuccess, (state, { products }) => ({
//     ...state,
//     products,
//     filteredProducts: products, // Initially, show all products
//     isLoading: false,
//     error: null
//   })),
  
//   on(loadProductsFailure, (state, { error }) => ({
//     ...state,
//     isLoading: false,
//     error
//   })),
  
//   on(updateFilters, (state, { filters }) => ({
//     ...state,
//     filters: { ...state.filters, ...filters }
//   })),
  
//   on(applyFilters, (state) => {
//     // Apply all filters to the products array
//     const filteredProducts = state.products.filter(product => {
//       // Implement your filter logic here based on state.filters
//       // This is a simplified example
//       if (state.filters.brands.length > 0 && !state.filters.brands.includes(product.brand)) {
//         return false;
//       }
//       // Add other filter conditions here
//       return true;
//     });
    
//     return {
//       ...state,
//       filteredProducts
//     };
//   })
// );