// // src/app/core/services/cart.service.ts
// import { Injectable, inject } from '@angular/core';
// import { Product } from '../models/product.model';

// export interface CartItem {
//   product: Product;
//   quantity: number;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartItems: CartItem[] = [];

//   addToCart(product: Product, quantity: number = 1): void {
//     const existingItem = this.cartItems.find(item => item.product.id === product.id);
    
//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       this.cartItems.push({ product, quantity });
//     }
    
//     this.saveCartToStorage();
//   }

//   removeFromCart(productId: number): void {
//     this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
//     this.saveCartToStorage();
//   }

//   updateQuantity(productId: number, quantity: number): void {
//     const item = this.cartItems.find(item => item.product.id === productId);
//     if (item) {
//       item.quantity = quantity;
//       this.saveCartToStorage();
//     }
//   }

//   getCartItems(): CartItem[] {
//     return [...this.cartItems];
//   }

//   getTotalCount(): number {
//     return this.cartItems.reduce((total, item) => total + item.quantity, 0);
//   }

//   getTotalPrice(): number {
//     return this.cartItems.reduce((total, item) => {
//       return total + (item.product.price * item.quantity);
//     }, 0);
//   }

//   clearCart(): void {
//     this.cartItems = [];
//     this.saveCartToStorage();
//   }

//   private saveCartToStorage(): void {
//     // FUTURE API INTEGRATION POINT: Replace with API call to save cart
//     // For now, we'll use localStorage as a temporary solution
//     try {
//       localStorage.setItem('cart', JSON.stringify(this.cartItems));
//     } catch (error) {
//       console.error('Error saving cart to localStorage:', error);
//     }
//   }

//   loadCartFromStorage(): void {
//     // FUTURE API INTEGRATION POINT: Replace with API call to load cart
//     try {
//       const savedCart = localStorage.getItem('cart');
//       if (savedCart) {
//         this.cartItems = JSON.parse(savedCart);
//       }
//     } catch (error) {
//       console.error('Error loading cart from localStorage:', error);
//     }
//   }
// }