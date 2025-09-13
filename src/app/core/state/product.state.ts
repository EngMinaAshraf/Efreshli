// // src/app/core/state/product.state.ts
// import { Product } from '../models/product.model'; // <-- ADD THIS IMPORT

// export interface ProductFilters {
//   delivery: string | null;
//   room: string | null;
//   brands: string[];
//   priceRange: { min: number; max: number } | null;
//   woodColor: string | null;
// }

// export interface ProductState {
//   products: Product[]; // <-- Now TypeScript knows what 'Product' is
//   filteredProducts: Product[];
//   isLoading: boolean;
//   error: string | null;
//   filters: ProductFilters;
// }

// export const initialProductState: ProductState = {
//   products: [],
//   filteredProducts: [],
//   isLoading: false,
//   error: null,
//   filters: {
//     delivery: null,
//     room: null,
//     brands: [],
//     priceRange: null,
//     woodColor: null,
//   }
// };