import { Component } from '@angular/core';

import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: Product[] = [];

  constructor(private cartService : CartService) {
    this.items = this.cartService.getItems();
  }
}
