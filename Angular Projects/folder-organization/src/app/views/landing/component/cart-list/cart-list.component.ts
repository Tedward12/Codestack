import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  items: any[] = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6'];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addToCart();
  }
}
