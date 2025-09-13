// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { Product } from '../../core/models/product.model';

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductService {
//   private products: Product[] = [
//     {
//       id: 1,
//       name: 'Apple',
//       description: 'Fresh red apples from local farms',
//       price: 30,
//       imageUrl: 'assets/images/apple.jpg',
//       category: 'Fruits',
//     },
//     {
//       id: 2,
//       name: 'Banana',
//       description: 'Sweet and ripe bananas',
//       price: 20,
//       imageUrl: 'assets/images/banana.jpg',
//       category: 'Fruits',
//     },
//     {
//       id: 3,
//       name: 'Tomato',
//       description: 'Organic fresh tomatoes',
//       price: 15,
//       imageUrl: 'assets/images/tomato.jpg',
//       category: 'Vegetables',
//     },
//     {
//       id: 4,
//       name: 'Potato',
//       description: 'Golden potatoes',
//       price: 25,
//       imageUrl: 'assets/images/potato.jpg',
//       category: 'Vegetables',
//     },
//     {
//       id: 5,
//       name: 'Milk',
//       description: 'Fresh cow milk - 1L',
//       price: 50,
//       imageUrl: 'assets/images/milk.jpg',
//       category: 'Dairy',
//     },
//     {
//       id: 6,
//       name: 'Cheese',
//       description: 'Natural cheddar cheese',
//       price: 90,
//       imageUrl: 'assets/images/cheese.jpg',
//       category: 'Dairy',
//     },
//   ];

//   constructor() {}

//   getProducts(): Observable<Product[]> {
//     // حاليا بيرجع mock data
//     return of(this.products);

//     // ✅ لما يبقى عندك API فعلي:
//     // return this.http.get<Product[]>('https://api.example.com/products');
//   }
// }


// src/app/core/services/product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // Mock data based on your screenshots
  private mockProducts: Product[] = [
    {
      id: 1,
      name: 'Glow Table Lamp',
      price: 369,
      originalPrice: 369,
      category: 'Side Lamps',
      brand: 'Anilico',
      delivery: 'Fast delivery [26]',
      size: 'Size: 20',
      imageUrl: 'assets/images/glow-table-lamp.jpg'
    },
    // Add more products here...
  ];

  getProducts(): Observable<Product[]> {
    // Return mock data with a delay to simulate API call
    return of(this.mockProducts).pipe(delay(500));
  }
}