// // src/app/shared/pipes/price.pipe.ts
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'price',
//   standalone: true // This makes it a standalone pipe
// })
// export class PricePipe implements PipeTransform {
//   transform(value: number, currencyCode: string = 'EGP'): string {
//     if (isNaN(value)) return '';
    
//     return `${currencyCode} ${value.toLocaleString('en-US', {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2
//     })}`;
//   }
// }