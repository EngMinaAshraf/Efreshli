import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  encapsulation: ViewEncapsulation.None // إضافة هذا السطر

})
export class HeaderComponent {
  activeMenu: string = '';
  private hideTimeout: any;

  // Mega menu data
megaMenuData = {
    furniture: `
      <div class="mega-menu-column">
        <a href="/category/living-room" (click)="navigateToCategory('living-room')"><h6>Living Room</h6></a>
        <ul class="mega-menu-list">
          <li><a href="#" (click)="navigateToCategory('living-room')">Accent & Arm Chairs</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">Sofas & Sectionals</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">Coffee Tables</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">End & Side Tables</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">Poufs & Stools</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">Consoles & Back Sofas</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">Media Consoles & TV Units</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">Storage Solutions</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">Ottomans & Benches</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">Sofa Beds & Daybeds</a></li>
          <li><a href="#" (click)="navigateToCategory('living-room')">Chaise Lounges</a></li>
        </ul>
        <a href="#" class="explore-more">Explore more</a>
      </div>
      <div class="mega-menu-column">
        <a href="/category/dining-room" (click)="navigateToCategory('dining-room')"><h6>Dining Room</h6></a>
        <ul class="mega-menu-list">
          <li><a href="#" (click)="navigateToCategory('dining-room')">Dining Chairs</a></li>
          <li><a href="#" (click)="navigateToCategory('dining-room')">Dining Tables</a></li>
          <li><a href="#" (click)="navigateToCategory('dining-room')">Bar Cabinets</a></li>
          <li><a href="#" (click)="navigateToCategory('dining-room')">Dining Sideboards</a></li>
          <li><a href="#" (click)="navigateToCategory('dining-room')">Bar Stools</a></li>
          <li><a href="#" (click)="navigateToCategory('dining-room')">Trolleys</a></li>
        </ul>
        <a href="#" class="explore-more">Explore more</a>
      </div>
      <div class="mega-menu-column">
        <a href="/category/bedroom" (click)="navigateToCategory('bedroom')"><h6>Bedroom</h6></a>
        <ul class="mega-menu-list">
          <li><a href="#" (click)="navigateToCategory('bedroom')">Beds</a></li>
          <li><a href="#" (click)="navigateToCategory('bedroom')">Night Tables</a></li>
          <li><a href="#" (click)="navigateToCategory('bedroom')">Dressers</a></li>
          <li><a href="#" (click)="navigateToCategory('bedroom')">Headboards</a></li>
          <li><a href="#" (click)="navigateToCategory('bedroom')">Chests</a></li>
          <li><a href="#" (click)="navigateToCategory('bedroom')">Wardrobes</a></li>
        </ul>
        <a href="#" class="explore-more">Explore more</a>
      </div>
      <div class="mega-menu-column">
        <a href="/category/kids-furniture" (click)="navigateToCategory('kids-furniture')"><h6>Kids Furniture</h6></a>
        <ul class="mega-menu-list">
          <li><a href="#" (click)="navigateToCategory('kids-furniture')">Cribs</a></li>
          <li><a href="#" (click)="navigateToCategory('kids-furniture')">Kids Beds</a></li>
          <li><a href="#" (click)="navigateToCategory('kids-furniture')">Kids Dressers & Closets</a></li>
          <li><a href="#" (click)="navigateToCategory('kids-furniture')">Kids Nightstands</a></li>
          <li><a href="#" (click)="navigateToCategory('kids-furniture')">Kids Desks</a></li>
          <li><a href="#" (click)="navigateToCategory('kids-furniture')">Kids Tables & Chairs</a></li>
        </ul>
        <a href="#" class="explore-more">Explore more</a>
      </div>
      <div class="mega-menu-column">
        <a href="/category/outdoor" (click)="navigateToCategory('outdoor')"><h6>Outdoor</h6></a>
        <ul class="mega-menu-list">
          <li><a href="#" (click)="navigateToCategory('outdoor')">Outdoor Sofas</a></li>
          <li><a href="#" (click)="navigateToCategory('outdoor')">Outdoor Coffee Tables</a></li>
          <li><a href="#" (click)="navigateToCategory('outdoor')">Outdoor Dining Tables</a></li>
          <li><a href="#" (click)="navigateToCategory('outdoor')">Outdoor Chairs</a></li>
          <li><a href="#" (click)="navigateToCategory('outdoor')">Outdoor Sets</a></li>
          <li><a href="#" (click)="navigateToCategory('outdoor')">Sunloungers</a></li>
        </ul>
        <a href="#" class="explore-more">Explore more</a>
      </div>
      <div class="mega-menu-column">
        <a href="/category/kitchen-dining" (click)="navigateToCategory('kitchen-dining')"><h6>Kitchen & Dining</h6></a>
        <ul class="mega-menu-list">
          <li><a href="#" (click)="navigateToCategory('kitchen-dining')">Cookware & Bakeware</a></li>
          <li><a href="#" (click)="navigateToCategory('kitchen-dining')">Kitchen Accessories</a></li>
          <li><a href="#" (click)="navigateToCategory('kitchen-dining')">Cutlery</a></li>
          <li><a href="#" (click)="navigateToCategory('kitchen-dining')">Dinnerware</a></li>
          <li><a href="#" (click)="navigateToCategory('kitchen-dining')">Trays</a></li>
          <li><a href="#" (click)="navigateToCategory('kitchen-dining')">Table Linens</a></li>
        </ul>
        <a href="#" class="explore-more">Explore more</a>
      </div>
      <div class="mega-menu-column">
        <a href="/category/home-office" (click)="navigateToCategory('home-office')"><h6>Home Office</h6></a>
        <ul class="mega-menu-list">
          <li><a href="#" (click)="navigateToCategory('home-office')">Desks</a></li>
          <li><a href="#" (click)="navigateToCategory('home-office')">Office Chairs</a></li>
          <li><a href="#" (click)="navigateToCategory('home-office')">Meeting Tables</a></li>
          <li><a href="#" (click)="navigateToCategory('home-office')">Office Cabinets</a></li>
        </ul>
      </div>
    `,
    lighting: `
      <div class="categories-row">
        <div class="category-card">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/xdiyEScUqHCsRRz7qJ5bsTFX7KafHjw5ZncqAch8.jpg" /> <!-- Replace with your actual image path -->
          <p>Ceiling Lighting</p>
        </div>
        <div class="category-card">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/TTWpKFPW3hZW7ZfGZMoBf9A95u83sDIPjSCf2yxn.jpg" alt="Side Lamps" />
          <p>Side Lamps</p>
        </div>
        <div class="category-card">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/KdibSyfRmXDe4PYUXBhhX0STf2FIgh7bWikpgnWO.jpg" alt="Floor Lamps" />
          <p>Floor Lamps</p>
        </div>
        <div class="category-card">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/WdasNH7fSg4cF1601sW8sd2b3Q5lb51TPzJjvfGy.jpg" alt="Wall Lights" />
          <p>Wall Lights</p>
        </div>
      </div>
      
    `,
    rug: `
      <div class="categories-row">
        <div class="category-card">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/Wf5tygtbmH4Zm6VL9ZSce84XHSHLUTMi1WTsHuEN.jpg" alt="Area Rugs" />
          <p>Area Rugs</p>
        </div>
        <div class="category-card">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/xef2Ejgxg7bPvPrL8D4PizE9qnPjp9BddcYIbSZ7.jpg" alt="Indoor - Outdoor Rugs" />
          <p>Indoor - Outdoor Rugs</p>
        </div>
        <div class="category-card">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/h90tS4TWCUuddDG1Fcba9AHOcV4Jo5ojnrxgQdiH.webp" alt="Floormats & Doormats" />
          <p>Floormats & Doormats</p>
        </div>
      </div>
      
    `,
    'bedding-bath': `
      <div class="categories-row">
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/iscXinJMNZgaH8yEVa75p6WMkpViqysJ7O44Vkoq.jpg" alt="Mattresses & Mattress Covers" />
          <p>Mattresses & Mattress Covers</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/HKad0LlrW0gBFeYa1MBKCpC6t1DcOC7TGRJIKnwc.jpg" alt="Towels" />
          <p>Towels</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/oVosefeGAZxEXvmK5GfcrzLaPoJWWFJKCS3Ty3r8.jpg" alt="Throw Blanket" />
          <p>Throw Blanket</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/xy5Zl9kxObir7P8TCzPobrl7oesa1AoCP8NH9fSS.jpg" alt="Duvet Covers" />
          <p>Duvet Covers</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/mbW3gUATm3vBJMgwAtPgxhx6JCS1KdK2Yl5wBC9Y.jpg" alt="Bedsheets" />
          <p>Bedsheets</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/tHHN33rqzBfIFty6BjlXwLRG6FNRDw1ADe64jv9x.jpg" alt="Duvets & Duvet Covers" />
          <p>Duvets & Duvet Covers</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/G87XcLngoqbFd5wQ2S9cgoaBlXCgar2Wm0a4UZdb.jpg" alt="Pillows & Pillow Cases" />
          <p>Pillows & Pillow Cases</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/mbW3gUATm3vBJMgwAtPgxhx6JCS1KdK2Yl5wBC9Y.jpg" alt="Quilts & Blankets" />
          <p>Quilts & Blankets</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/tHHN33rqzBfIFty6BjlXwLRG6FNRDw1ADe64jv9x.jpg" alt="Bath Rugs & Mats" />
          <p>Bath Rugs & Mats</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/G87XcLngoqbFd5wQ2S9cgoaBlXCgar2Wm0a4UZdb.jpg" alt="Bathroom Accessories" />
          <p>Bathroom Accessories</p>
        </div>
      </div>
      
    `,
    decor: `
      <div class="categories-row">
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/zc0gF9RZgilL2XvBqe4DbzxYgSH4hydG7NOc5Hl0.webp" alt="Wall Mirrors" />
          <p>Wall Mirrors</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/WjgsOYvps0RwTZbp953GU8F7UTEUK1ZjozZbJzVZ.jpg" alt="Decorative Objects" />
          <p>Decorative Objects</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/AEwWRhu8zsvLF20RNMjTWVpMVuEuHKbyJLBu4FeF.jpg" alt="Cushions" />
          <p>Cushions</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/pXonTWITuefm0z5Za9BR1YfkvqL5yiQSDUv9SMdQ.jpg" alt="Framed Prints" />
          <p>Framed Prints</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/N7msZSXaq3RExHa8HJFuQdhw2pzJaoDLokqRVQda.jpg" alt="Plant Pots" />
          <p>Plant Pots</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/PZa22f50IX9i6uPe6LlkYzJV1gOeuAlVvkVBXPz8.jpg" alt="Baskets & Bins" />
          <p>Baskets & Bins</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/CTW4GDj5DBvwXasdfSul4lRMt7iFDEx3pf4TTx2u.jpg" alt="Artificial Plants" />
          <p>Artificial Plants</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/pXonTWITuefm0z5Za9BR1YfkvqL5yiQSDUv9SMdQ.jpg" alt="Wall Hangings" />
          <p>Wall Hangings</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/pXonTWITuefm0z5Za9BR1YfkvqL5yiQSDUv9SMdQ.jpg" alt="Candles & Candle Holders" />
          <p>Candles & Candle Holders</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/zc0gF9RZgilL2XvBqe4DbzxYgSH4hydG7NOc5Hl0.webp" alt="Wallpaper" />
          <p>Wallpaper</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/CTW4GDj5DBvwXasdfSul4lRMt7iFDEx3pf4TTx2u.jpg" alt="Natural Plants" />
          <p>Natural Plants</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/pXonTWITuefm0z5Za9BR1YfkvqL5yiQSDUv9SMdQ.jpg" alt="Paintings" />
          <p>Paintings</p>
        </div>
      </div>
      
    `,
    appliances: `
      <div class="categories-row">
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/6B0EBvlI2AjpbpwEMWbnl9n2HyOHwzBkLOqVd2jd.webp" alt="Blender" />
          <p>Blender</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/90zGvnUwSCS9IKVO3HUbPWXWrfPlFnLtvWxwdI84.webp" alt="Food Processor" />
          <p>Food Processor</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/EP8oc1bHGNkENHS1VevOPPuHzPNhNB8iKQQrtO4T.webp" alt="Coffee Machine" />
          <p>Coffee Machine</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/2xoDXXqCA6nr9zwRIiysDg7NapIvxA6nsAfWe5gN.webp" alt="Kettle" />
          <p>Kettle</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/fSZQ4hFq3fJOGjXxlcCTwtCnEGJnFZLuWJffTMDk.webp" alt="Refrigerator" />
          <p>Refrigerator</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/3rEInXX0eGcOHGL1vPJNjgvhNgqci6MfVQpV65VY.webp" alt="Water Dispensers" />
          <p>Water Dispensers</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/QrGhQLh0UiOGceePcJap77ahx7phspLhnPWFX5xX.webp" alt="TVs" />
          <p>TVs</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/fSZQ4hFq3fJOGjXxlcCTwtCnEGJnFZLuWJffTMDk.webp" alt="Vacuum Cleaner" />
          <p>Vacuum Cleaner</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/3rEInXX0eGcOHGL1vPJNjgvhNgqci6MfVQpV65VY.webp" alt="Microwave" />
          <p>Microwave</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/EP8oc1bHGNkENHS1VevOPPuHzPNhNB8iKQQrtO4T.webp" alt="Dishwasher" />
          <p>Dishwasher</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/6B0EBvlI2AjpbpwEMWbnl9n2HyOHwzBkLOqVd2jd.webp" alt="Cooker" />
          <p>Cooker</p>
        </div>
        <div class="category-card small-img">
          <img src="https://dkq2tfmdsh9ss.cloudfront.net/sub_categories/6B0EBvlI2AjpbpwEMWbnl9n2HyOHwzBkLOqVd2jd.webp" alt="Washing Machine" />
          <p>Washing Machine</p>
        </div>
      </div>
      
    `,
    // Add placeholders for other menus like 'shop-collection', 'ready-to-ship', 'on-sale' if needed, but based on your query, focus was on the main ones.
  };

  constructor(private router: Router) { }

  onSearch(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log('Search query:', target.value);
  }

  onMenuClick(category: string) {
    console.log('Menu clicked:', category);
  }

  onActionClick(action: string) {
    console.log('Action clicked:', action);
  }

  showMegaMenu(menu: string) {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
    this.activeMenu = menu;
  }

  onNavItemLeave() {
    this.hideTimeout = setTimeout(() => {
      this.hideMegaMenu();
    }, 300);
  }

  hideMegaMenu() {
    this.activeMenu = '';
  }

  keepMenuOpen() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }

  getMenuContent(): string {
    return this.megaMenuData[this.activeMenu as keyof typeof this.megaMenuData] || '';
  }

  navigateToCategory(category: string) {
    // Navigate to the category page with the appropriate layout
    this.router.navigate([`/category/${category}`]);
  }
}