import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  addToCart(item : Product) {
    this.items.push(item);
    console.log('Added item '+ item.name + ' to cart');
  }

  getItems() {
    return this.items;
  }

  clearItem(item : Product) {
    this.items = [];
    console.log('Cart cleared!')
    return this.items;
  }
}
