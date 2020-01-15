import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-count',
  templateUrl: './cart-count.component.html',
  styleUrls: ['./cart-count.component.scss']
})
export class CartCountComponent implements OnInit {
  cartCount = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartCount.subscribe(count =>{
      this.cartCount = count;
    });
  }

}
