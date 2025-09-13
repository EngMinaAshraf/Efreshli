// // src/app/core/models/product.model.ts
// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
//   originalPrice?: number; // For showing discounts
//   discountPercent?: number; // e.g., "31% OFF"
//   category: string; // e.g., "Side Lamps", "Floor Lamps"
//   roomType?: string; // e.g., "Living Room"
//   brand: string; // e.g., "Anilico"
//   delivery: string; // e.g., "Fast delivery [26]"
//   size: string; // e.g., "Size: 20", "Size: H 50 and 40 cm"
//   woodColor?: string; // e.g., "Beige"
//   imageUrl: string;
//   // Add any other properties you see in your images
// }

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  category: string;
  brand: string;
  delivery: string;
  size: string;
  imageUrl: string;
}

