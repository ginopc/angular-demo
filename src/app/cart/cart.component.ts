import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms'

import { CartService } from '../cart.service';
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items: Product[] = [];
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService : CartService, private formBuilder : FormBuilder) {
      this.items = this.cartService.getItems();
  }

  onSubmit() {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

}
