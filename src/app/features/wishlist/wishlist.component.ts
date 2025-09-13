import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface WishlistItem {
  image: string;
  name: string;
  sizeOptions: string[];
  category: string;
  price: string;
}

interface Wishlist {
  name: string;
  items: WishlistItem[];
  isPublic: boolean;
}

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true
})
export class WishlistComponent implements OnInit {
  wishlists: Wishlist[] = [];
  selectedList: Wishlist | null = null;
  showCreatePopup = false;
  newListName = '';
  state: 'empty' | 'list' | 'detail' = 'empty';

  constructor() {}

  ngOnInit() {
    // Mock initial data if needed; start empty as per image 1
    this.updateState();
  }

  updateState() {
    if (this.wishlists.length === 0) {
      this.state = 'empty';
    } else {
      this.state = 'list';
    }
  }

  openCreatePopup() {
    this.showCreatePopup = true;
  }

  createList() {
    if (this.newListName.trim()) {
      this.wishlists.push({
        name: this.newListName,
        items: [],
        isPublic: true
      });
      this.newListName = '';
      this.showCreatePopup = false;
      this.updateState();
    }
  }

  viewList(list: Wishlist) {
    this.selectedList = list;
    this.state = 'detail';
  }

  backToLists() {
    this.selectedList = null;
    this.state = 'list';
  }

  // Mock function to add items; in real app, this would be from product page
  addMockItemsToList(list: Wishlist) {
    list.items = [
      {
        image: 'https://dkq2tfmdsh9ss.cloudfront.net/filters:background_color(fff)/fit-in/260x274/filters:format(jpeg)/products/68bae2f076d60.png',
        name: 'Plain Jute Rug',
        sizeOptions: ['150x200', '200x300'],
        category: 'Indoor - Outdoor Rugs',
        price: '1,950 EGP'
      },
      {
        image: 'https://dkq2tfmdsh9ss.cloudfront.net/filters:background_color(fff)/fit-in/260x274/filters:format(jpeg)/products/IQYMlFRzZJ9CHwwtKbv9nv5ZlfrF5B9xbxvEYmEd.jpg',
        name: 'Pastel Tiles Handwoven Rug - Multicolor Geometric',
        sizeOptions: ['200x300', '170x260 cm'],
        category: 'Indoor - Outdoor Rugs',
        price: '675 EGP'
      }
    ];
  }
}