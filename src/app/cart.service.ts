import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(private http : HttpClient) {}

  addToCart(item : Product) {
    this.items.push(item);
    console.log('Added item '+ item.name + ' to cart');
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    console.log('Cart cleared!')
    return this.items;
  }

  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }
}
