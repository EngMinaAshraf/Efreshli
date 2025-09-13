import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  imports: [CommonModule]
})
export class CategoryComponent implements OnInit {
  categoryName: string = '';
  categoryItems: { name: string, image: string }[] = [];
  currentRoute: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      this.categoryName = category?.replace('-', ' ') || 'Category';
      this.currentRoute = `shop > category > ${category || ''}`;

      const categoriesData = {
        'living-room': [
          { name: 'Accent & Arm Chairs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/ZYWTrMpKOJQzET9LTd2XbjoNQgTW2n2YdYUlb2oZ.jpg' },
          { name: 'Sofas & Sectionals', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/qP4uyGZlQ7PytfMK9CyB4ynV8KdTCrkBNuMgT4YM.jpg' },
          { name: 'Coffee Tables', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/WyyusZcn1Iu4HEOn5vGNNck8wOgZZwhUTf6mj6ON.jpg' },
          { name: 'End & Side Tables', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/TEMNzGVspjGYI9OUQfBGMgB5cDTn7JURs9DLbDly.png' },
          { name: 'Poufs & Stools', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/IZn0gaPvA6eMxjmGPH48VJ6CeOg8dwtxmWZEvoez.png' },
          { name: 'Consoles & Back Sofas', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/0561J6yHVx1HraYr1YY8Xejdz57ZaAeUtO7X1M4u.jpg' },
          { name: 'Media Consoles & TV Units', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/3HpFRwoyvukHokqBPr09PwGwEuo3NDK5zKzWyBTA.jpg' },
          { name: 'Storage Solutions', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/0nG0m66unYaNxEixqshtOu4VjHk1cDNqiBcJkLP3.jpg' },
          { name: 'Ottomans & Benches', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/yRcYlNuJSad43U26OhkHrrgPNBtRHZboPp6UuTYF.png' },
          { name: 'Sofabeds & Daybeds', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/OvbjlKofkzP3tZn5E1B1T0LwUVQCDK6yOTv9jdQC.jpg' },
          { name: 'Chaise Lounges', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/MUCXbUHxiBeAbmo59EzW7dvRREimPe1nrm3q6exm.jpg' },
          // Add more items as needed
        ],
        'dining-room': [
          { name: 'Dining Chairs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/TuwhTlxEMZ2EGz7ClDi5v0yPyuHtMCtBIYU6ekBZ.jpg' },
          { name: 'Dining Tables', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/3hLDInyqGXEImtVukh316mDZi57LYRvW1GXYpvps.jpg' },
          { name: 'Dining Chairs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/SHliHw3XT5LvtmXBOE19j88TOyNvcX9k53tlpuvz.png' },
          { name: 'Dining Tables', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/PLuKsda1LOLXER3md9e2q3VgvUJTMAYPAu0C7Ftp.png' },
          { name: 'Dining Chairs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/b7KCX5ggi5KrpXEZtS9erWeyNKKbPLZos7IwkWkh.png' },
          { name: 'Dining Tables', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/1AivCOeJKX4ZfYP3PR3RtfbgH473AAGVK4IytCbN.png' },
          { name: 'Dining Chairs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/NafzJgwAakcVgkchBFxGgPbDhxRXdFWPpJ3Fbs2S.png' },
          // Add more items as needed
        ],
        'bedroom': [
          { name: 'Beds', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/REQK1TvDp0bOUktX2kpIMsxhZN5ZQVnPuUa2ogLI.png' },
          { name: 'Night Tables', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/XwRZezLoyWt5JTCHhTYuShsGCr7dGM6Yxf5oeNvT.jpg' },
          { name: 'Dressers', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/1UjBjeVWeJUM1WyOpwSQJx2E6Yh7u8WgxDSzs4Yn.jpg' },
          { name: 'Headboards', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/FoRLdGDZRjKOE4uNq8xXkG7Py2dDT4RyMXv8dXg6.jpg' },
          { name: 'Chests', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/Iruq3hfK5A363pX55XKeDGN0l2LozlMPbgze4DSJ.jpg' },
          { name: 'Wardrobes', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/Zr5qgaCqFZf6sJ3hKwlq6fC6gAaWdnRuUYDRA0M4.png' },
          { name: 'Dressers', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/SbErLouXDaIcRAEEvbnEhW3eB0LbjwuijRdJ7e1W.png' },
          { name: 'Headboards', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/4aeWcjOLsY5mxF8Ru2mWYBbH8QK6eHxf61th9jR7.jpg' },
        ],
        'kids-furniture': [
          { name: 'Cribs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/MoTVeBrTn0F59joKtdyHJaKl0o1m6KhMSuCGqrJk.webp' },
          { name: 'Kids Beds', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/MoTVeBrTn0F59joKtdyHJaKl0o1m6KhMSuCGqrJk.webp' },
          { name: 'Cribs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/MoTVeBrTn0F59joKtdyHJaKl0o1m6KhMSuCGqrJk.webp' },
          { name: 'Kids Beds', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/MoTVeBrTn0F59joKtdyHJaKl0o1m6KhMSuCGqrJk.webp' },
          { name: 'Cribs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/MoTVeBrTn0F59joKtdyHJaKl0o1m6KhMSuCGqrJk.webp' },
          { name: 'Kids Beds', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/MoTVeBrTn0F59joKtdyHJaKl0o1m6KhMSuCGqrJk.webp' },
          { name: 'Cribs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/MoTVeBrTn0F59joKtdyHJaKl0o1m6KhMSuCGqrJk.webp' },
          { name: 'Kids Beds', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/MoTVeBrTn0F59joKtdyHJaKl0o1m6KhMSuCGqrJk.webp' },
          // Add more items as needed
        ],
        'outdoor': [
          { name: 'Outdoor Sofas', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/F75UfyAwCwZqSqUqnWgIedRGg0E9503CtSXt3vyd.jpg' },
          { name: 'Outdoor Coffee Tables', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/F75UfyAwCwZqSqUqnWgIedRGg0E9503CtSXt3vyd.jpg' },
          { name: 'Outdoor Sofas', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/F75UfyAwCwZqSqUqnWgIedRGg0E9503CtSXt3vyd.jpg' },
          { name: 'Outdoor Coffee Tables', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/F75UfyAwCwZqSqUqnWgIedRGg0E9503CtSXt3vyd.jpg' },
          { name: 'Outdoor Sofas', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/F75UfyAwCwZqSqUqnWgIedRGg0E9503CtSXt3vyd.jpg' },
          { name: 'Outdoor Coffee Tables', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/F75UfyAwCwZqSqUqnWgIedRGg0E9503CtSXt3vyd.jpg' },
          { name: 'Outdoor Sofas', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/F75UfyAwCwZqSqUqnWgIedRGg0E9503CtSXt3vyd.jpg' },
          // Add more items as needed
        ],
        'kitchen-dining': [
          { name: 'Cookware & Bakeware', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/BHaj8bxB0glVAtleAiOJ79DUybWhy9oC7klTR07O.png' },
          { name: 'Kitchen Accessories', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/BHaj8bxB0glVAtleAiOJ79DUybWhy9oC7klTR07O.png' },
          { name: 'Cookware & Bakeware', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/BHaj8bxB0glVAtleAiOJ79DUybWhy9oC7klTR07O.png' },
          { name: 'Kitchen Accessories', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/BHaj8bxB0glVAtleAiOJ79DUybWhy9oC7klTR07O.png' },
          { name: 'Cookware & Bakeware', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/BHaj8bxB0glVAtleAiOJ79DUybWhy9oC7klTR07O.png' },
          { name: 'Kitchen Accessories', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/BHaj8bxB0glVAtleAiOJ79DUybWhy9oC7klTR07O.png' },
          // Add more items as needed
        ],
        'home-office': [
          { name: 'Desks', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/ulD5AltvgNJK8QmewAn6devrra2CRNHUy8uCyWci.jpg' },
          { name: 'Office Chairs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/ulD5AltvgNJK8QmewAn6devrra2CRNHUy8uCyWci.jpg' },
          { name: 'Desks', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/ulD5AltvgNJK8QmewAn6devrra2CRNHUy8uCyWci.jpg' },
          { name: 'Office Chairs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/ulD5AltvgNJK8QmewAn6devrra2CRNHUy8uCyWci.jpg' },
          // Add more items as needed
        ],
        'lighting': [
          { name: 'Ceiling Lighting', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/xdiyEScUqHCsRRz7qJ5bsTFX7KafHjw5ZncqAch8.jpg' },
          { name: 'Side Lamps', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/TTWpKFPW3hZW7ZfGZMoBf9A95u83sDIPjSCf2yxn.jpg' },
          { name: 'Floor Lamps', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/KdibSyfRmXDe4PYUXBhhX0STf2FIgh7bWikpgnWO.jpg' },
          { name: 'Wall Lights', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/WdasNH7fSg4cF1601sW8sd2b3Q5lb51TPzJjvfGy.jpg' },
        ],
        'rug': [
          { name: 'Area Rugs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/Wf5tygtbmH4Zm6VL9ZSce84XHSHLUTMi1WTsHuEN.jpg' },
          { name: 'Indoor - Outdoor Rugs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/xef2Ejgxg7bPvPrL8D4PizE9qnPjp9BddcYIbSZ7.jpg' },
          { name: 'Floormats & Doormats', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/h90tS4TWCUuddDG1Fcba9AHOcV4Jo5ojnrxgQdiH.webp' },
        ],
        'bedding-bath': [
          { name: 'Mattresses & Mattress Covers', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/iscXinJMNZgaH8yEVa75p6WMkpViqysJ7O44Vkoq.jpg' },
          { name: 'Towels', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/HKad0LlrW0gBFeYa1MBKCpC6t1DcOC7TGRJIKnwc.jpg' },
          { name: 'Throw Blanket', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/oVosefeGAZxEXvmK5GfcrzLaPoJWWFJKCS3Ty3r8.jpg' },
          { name: 'Duvet Covers', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/xy5Zl9kxObir7P8TCzPobrl7oesa1AoCP8NH9fSS.jpg' },
          { name: 'Bedsheets', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/mbW3gUATm3vBJMgwAtPgxhx6JCS1KdK2Yl5wBC9Y.jpg' },
          { name: 'Duvets & Duvet Covers', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/tHHN33rqzBfIFty6BjlXwLRG6FNRDw1ADe64jv9x.jpg' },
          { name: 'Pillows & Pillow Cases', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/G87XcLngoqbFd5wQ2S9cgoaBlXCgar2Wm0a4UZdb.jpg' },
          { name: 'Quilts & Blankets', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/mbW3gUATm3vBJMgwAtPgxhx6JCS1KdK2Yl5wBC9Y.jpg' },
          { name: 'Bath Rugs & Mats', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/tHHN33rqzBfIFty6BjlXwLRG6FNRDw1ADe64jv9x.jpg' },
          { name: 'Bathroom Accessories', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/G87XcLngoqbFd5wQ2S9cgoaBlXCgar2Wm0a4UZdb.jpg' },
        ],
        'decor': [
          { name: 'Wall Mirrors', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/zc0gF9RZgilL2XvBqe4DbzxYgSH4hydG7NOc5Hl0.webp' },
          { name: 'Decorative Objects', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/WjgsOYvps0RwTZbp953GU8F7UTEUK1ZjozZbJzVZ.jpg' },
          { name: 'Cushions', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/AEwWRhu8zsvLF20RNMjTWVpMVuEuHKbyJLBu4FeF.jpg' },
          { name: 'Framed Prints', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/pXonTWITuefm0z5Za9BR1YfkvqL5yiQSDUv9SMdQ.jpg' },
          { name: 'Plant Pots', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/N7msZSXaq3RExHa8HJFuQdhw2pzJaoDLokqRVQda.jpg' },
          { name: 'Baskets & Bins', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/PZa22f50IX9i6uPe6LlkYzJV1gOeuAlVvkVBXPz8.jpg' },
          { name: 'Artificial Plants', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/CTW4GDj5DBvwXasdfSul4lRMt7iFDEx3pf4TTx2u.jpg' },
          { name: 'Wall Hangings', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/pXonTWITuefm0z5Za9BR1YfkvqL5yiQSDUv9SMdQ.jpg' },
          { name: 'Candles & Candle Holders', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/pXonTWITuefm0z5Za9BR1YfkvqL5yiQSDUv9SMdQ.jpg' },
          { name: 'Wallpaper', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/zc0gF9RZgilL2XvBqe4DbzxYgSH4hydG7NOc5Hl0.webp' },
          { name: 'Natural Plants', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/CTW4GDj5DBvwXasdfSul4lRMt7iFDEx3pf4TTx2u.jpg' },
          { name: 'Paintings', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/pXonTWITuefm0z5Za9BR1YfkvqL5yiQSDUv9SMdQ.jpg' },
        ],
        'appliances': [
          { name: 'Blender', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/6B0EBvlI2AjpbpwEMWbnl9n2HyOHwzBkLOqVd2jd.webp' },
          { name: 'Food Processor', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/90zGvnUwSCS9IKVO3HUbPWXWrfPlFnLtvWxwdI84.webp' },
          { name: 'Coffee Machine', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/EP8oc1bHGNkENHS1VevOPPuHzPNhNB8iKQQrtO4T.webp' },
          { name: 'Kettle', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/2xoDXXqCA6nr9zwRIiysDg7NapIvxA6nsAfWe5gN.webp' },
          { name: 'Refrigerator', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/fSZQ4hFq3fJOGjXxlcCTwtCnEGJnFZLuWJffTMDk.webp' },
          { name: 'Water Dispensers', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/3rEInXX0eGcOHGL1vPJNjgvhNgqci6MfVQpV65VY.webp' },
          { name: 'TVs', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/QrGhQLh0UiOGceePcJap77ahx7phspLhnPWFX5xX.webp' },
          { name: 'Vacuum Cleaner', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/fSZQ4hFq3fJOGjXxlcCTwtCnEGJnFZLuWJffTMDk.webp' },
          { name: 'Microwave', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/3rEInXX0eGcOHGL1vPJNjgvhNgqci6MfVQpV65VY.webp' },
          { name: 'Dishwasher', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/EP8oc1bHGNkENHS1VevOPPuHzPNhNB8iKQQrtO4T.webp' },
          { name: 'Cooker', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/6B0EBvlI2AjpbpwEMWbnl9n2HyOHwzBkLOqVd2jd.webp' },
          { name: 'Washing Machine', image: 'https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/6B0EBvlI2AjpbpwEMWbnl9n2HyOHwzBkLOqVd2jd.webp' },
        ],
      };

      this.categoryItems = categoriesData[category as keyof typeof categoriesData] || [];
    });
  }
}