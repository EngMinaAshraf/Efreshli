// // src/app/core/state/app.state.ts
// import { ActionReducerMap } from '@ngrx/store';
// import {  productReducer } from './product.reducer';
// import { ProductState } from './product.state';

// // Define the overall shape of the application state
// export interface AppState {
//   product: ProductState;
//   // You can add other state slices here in the future
//   // For example:
//   // cart: CartState;
//   // auth: AuthState;
// }

// // Combine all reducers into a single reducer function
// export const appReducer: ActionReducerMap<AppState> = {
//   product: productReducer,
//   // Add other reducers here in the future
//   // For example:
//   // cart: cartReducer,
//   // auth: authReducer,
// };